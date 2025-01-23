import mongoose from "mongoose";
import { MONGODB_PAYTM_KEY } from "./config";

mongoose.connect(MONGODB_PAYTM_KEY)

const userSchema = mongoose.Schema({
    username: String, 
    firstName: String,
    lastName: String,
    password: String
})

export const User = mongoose.model("users", userSchema)