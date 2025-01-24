import express from "express";
import userRouter from "/user.js";
import accountRouter from "/account.js"

const router = express.Router()
const app = express()

app.use("/user", userRouter)
app.use("/account", accountRouter)

export default router;