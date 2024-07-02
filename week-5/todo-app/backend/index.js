const express= require("express");
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./db");
const cors= require("cors");
const app=express();

app.use(express.json())
app.use(cors());

app.post('/todo',async (req,res)=>{
    const createPayload=req.body;
    const parsedPayload =createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            
        msg:" you sent the worng inputs",
        })
        return;
      
    }  // put it in mongodb
    await Todo.create({
        title: createPayload.title,
        description: createPayload.description, 
        
        })

        res.json({
            msg:"toto creatd successfuly"
        })

    })

app.get("/todos",async(req, res)=>{

    const todos= await Todo.find({});
    
    res.json({
        todos
    });
})

app.put("/completed",async(req, res)=>{
    const updatePayload= req.body;
    const parsedPayload= updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        compleated: true
    })
    res.json({
        msg:"Tod marked as completed"
    })
})































const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})






