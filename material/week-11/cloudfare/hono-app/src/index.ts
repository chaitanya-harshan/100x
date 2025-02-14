import { Hono } from 'hono'

const app = new Hono()

async function authMiddleWare(c: any, next: any) {
  if (c.req.header("Authorization")) {
    // Do validation
    await next()
  } else {
    return c.text("You dont have acces");
  }
} 

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/bo', authMiddleWare, async (c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));
  
  return c.text("Sup Hono!");
})

export default app
