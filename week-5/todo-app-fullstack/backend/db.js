import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://lemon:chaispaceX1415@cluster0.3w06p3p.mongodb.net/todos-server")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

export const todo = mongoose.model('todos', todoSchema);