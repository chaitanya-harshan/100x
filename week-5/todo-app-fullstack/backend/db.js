import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.MONGODB_TODO_SERVER)
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

export const todosTable = mongoose.model('todos', todoSchema);