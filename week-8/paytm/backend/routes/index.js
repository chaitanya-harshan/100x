import express from "express";
import userRouter from "user.js";

const router = express.Router()
const app = express()

app.use("/user", userRouter)

export default router;