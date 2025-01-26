import mongoose from "mongoose";
import { MONGODB_PAYTM_KEY } from "./config.js";
import { response } from "express";

mongoose.connect(MONGODB_PAYTM_KEY)

const userSchema = mongoose.Schema({
    username: {
        type: String,
        lowercase: true, 
        trim: true,
        unique: true, 
        required: true 
    }, 
    firstName: String,
    lastName: String,
    password: String
})

const accountSchema = mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
    balance: {type: Number, default: 10}
})

export const User = mongoose.model("users", userSchema)
export const Account = mongoose.model("accounts", accountSchema)

// console.log(await User.findOne());
