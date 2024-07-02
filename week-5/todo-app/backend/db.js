const mongose = require("mongoose");

mongose.connect("mongodb+srv://admin21:qwerty123456@sujit399.5yw3sem.mongodb.net/todosApp")

const todoSchema=mongoose.Schema({
    title:String,
    descriptin: String,
    completed: Boolean
})
const todo= mongoose.mondel('todo',todoSchema);

 
module.exports={
    todo
}