const express= require("express");
const { createTodo, updateTodo } = require("./types");

const app=express();


app.use(express.json())
app.post('/todo',(req,res)=>{
    const createPayload=req.body;
    const parsedPayload =createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            
        msg:" you sent the worng inputs",
        })
        return;
      
    }  // put it in mongodb
    })

app.get("/todos",()=>{

})

app.put("/completed",()=>{
    const pudatePayload= req.body;
    const parsedPayload= updateTodo.safeParse(updatePayload);
    req.status(411).json({
        msg: "you sent the worng inputs"
    })
    return;


})































const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})






