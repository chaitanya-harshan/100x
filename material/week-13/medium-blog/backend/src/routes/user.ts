import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signupInput, signinInput } from "@chaitanya_harshan/medium-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {  };
}>();

userRouter.post('/signup', async (c) => {
  const body = await c.req.json()
  const { success } = signupInput.safeParse(body)
  if (!success) {
    return c.json({ error: 'Invalid input' }, 411)
  }

  try {
    const prisma = new PrismaClient({datasourceUrl: c.env.DATABASE_URL}).$extends(withAccelerate());
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name
      }
    })
    console.log("User created:", user);
    const jwt = await sign({id: user.id}, c.env.JWT_SECRET)
    return c.json({jwt}, 201)
  } catch (e: any) {
    console.error("Error during signup:", e);
    return c.json({ error: e.message }, 403)
  }
})



userRouter.post('/signin', async (c) => {
  const body = await c.req.json()
  const { success } = signinInput.safeParse(body)
  if (!success) {
    return c.json({ error: 'Invalid input' }, 411)
  }

  try {
    const prisma = new PrismaClient({datasourceUrl: c.env.DATABASE_URL}).$extends(withAccelerate());
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: body.password
      },
    });
    if (!user) {
      return c.json({ error: 'Invalid email or password' }, 401)
    }
    console.log(user)
    const jwt = await sign({id: user.id}, c.env.JWT_SECRET)
    return c.json({jwt}, 200);
    
  } catch (e: any) {
    console.log(e)
    return c.json({ error: e.message }, 403);
  }
})