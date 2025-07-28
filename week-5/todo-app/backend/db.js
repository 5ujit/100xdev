const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin21:qwerty123456@sujit399.5yw3sem.mongodb.net/todosApp")

const todoSchema=mongoose.Schema({
    title:String,
    description: String,
    completed: Boolean
})
const Todo= mongoose.model('Todo',todoSchema)

 
module.exports={
    Todo
}