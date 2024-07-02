const express = require("express")
const app = express()
const  port =3011;

app.get("/rout-handler",function(req,res){
  res.json({
    name: "RAJA",
    age : 21
  })
})

app.listen(port,()=>{
  console.log("hello this server is running on 3011 ");
})