import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import {  createBlogInput, updateBlogInput } from "@chaitanya_harshan/medium-common";


export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
    payload: { id: string }
  };
  Variables: { 
    authorId: string;
   };
}>();


blogRouter.use('/*', async (c, next) => {
    const authHeader = c.req.header('Authorization')
    const token = authHeader?.split(' ')[1]
    if (!token) return c.json({ error: 'Unauthorized' }, 401)

    try {
        const payload = await verify(token, c.env.JWT_SECRET)
        if (payload) {
            // @ts-ignore
            c.set('authorId', payload.id)
            return next()
        }
    } catch (e) {
        return c.json({ error: 'User not logged in' }, 403)
    }
})



blogRouter.post('/', async(c) => {
    const body = await c.req.json()
    const { success } = createBlogInput.safeParse(body)
    if (!success) {
        return c.json({ error: 'Invalid input' }, 411)
    }
    const prisma = new PrismaClient({datasourceUrl: c.env.DATABASE_URL}).$extends(withAccelerate());
    const blog = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: c.get('authorId')
        }
    })

    return c.json(blog, 201)
})



blogRouter.put('/', async (c) => {
    const body = await c.req.json()    
    const { success } = updateBlogInput.safeParse(body)
    if (!success) {
        return c.json({ error: 'Invalid input' }, 411)
    }
    const prisma = new PrismaClient({datasourceUrl: c.env.DATABASE_URL}).$extends(withAccelerate());
    const blog = await prisma.post.update({
        data: {
            title: body.title,
            content: body.content
        },
        where: {
            id: body.id
        }
    })

    return c.json(blog, 201)
})


blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({datasourceUrl: c.env.DATABASE_URL}).$extends(withAccelerate());
    const blogs = await prisma.post.findMany({
        include: {
            author: {
                select: {
                    name: true,
                    email: true
                }
            }
        }
    });
    return c.json(blogs, 201)
})

// this needs to be below bulk else id will take the bulk router too cause it'll see bulk as id
blogRouter.get('/:id', async (c) => {
    const id = c.req.param("id") 
    try {
        const prisma = new PrismaClient({datasourceUrl: c.env.DATABASE_URL}).$extends(withAccelerate());
        const blog = await prisma.post.findUnique({
            where: {
                id
            }, 
            include: {
                author: {
                    select: {
                        name: true,
                        email: true
                    }
                }
            }
        })
    
        return c.json(blog, 201)
    } catch (e) {
        return c.json({ error: "Error fetching blog from db" }, 411)
    }
})
