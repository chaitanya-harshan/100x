import express from "express";
import jwt from jsonwebtoken;
import z from zod;
import { User } from "../db";
import { JWT_SECRET } from "../config";
import Authenticate from "../middleware";

const router = express.Router()

const signupSchema = z.object({
    username: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    pasword: z.string()
})

const signinSchema = z.object({
    username: z.string().email(),
    pasword: z.string()
})

const updateSchema = z.object({
    pasword: z.string(),
    firstName: z.string(),
    lastName: z.string()
})

router.post("/signup", async (req,res) => {
    const body = req.body;
    const { success } = signupSchema.safeParse(body)
    if (!success) {
        return res.status(401).json({message: "Incorrect inputs"})
    }
    
    if (User.findOne({username: body.username})) {
        return res.status(402).json({message: "Email already taken"})
    }

    try {
        const db_user = await User.create(body)
        const token = jwt.sign({ userId: db_user._id }, JWT_SECRET) // JWT

        return res.status(200).json({
            message: "User created successfully",
            token: token
        })
    } catch (err) {
        console.log("Error Connecting to Database\n", err);
        res.status(500).send("Internal Server error")
    }
})


router.get("/signin", async (req,res) => {
    const body = req.body;
    const { success } = signupSchema.safeParse(body)
    if (!success) {
        return res.status(401).json({message: "Incorrect inputs"})
    }

    const db_user = User.findOne({
        username: body.username,
        pasword: body.pasword
    })
    if (!db_user) {
        return res.status(411).json({message: "Error while logging in"})
    }
    
    const token = jwt.sign({ userId: db_user._id }, JWT_SECRET)
    return res.status(200).json({ token })
})


router.put("/", Authenticate, async (req, res) => {
    const body = req.body
    const { success } = updateSchema.safeParse(body)
    if (!success) {
        return res.status(411).json({message: "Invalid update/ Error while updating"})
    }

    try {
        await User.updateOne({_id: body.userId}, body)
        return res.status(200).json({message: "Updated Successfully"})
    } catch (err) {
        console.log("Error Updating to DB\n",err);
        return res.status(500).send("Error updating to DB")
    }
})

export default router;