const express = require("express");
const app= express();
const port = 3000;


// Middleware to  parse JOSON bodies

app.use(express.json());

// in memory database (for demonstrate purpous)



// let items =[
//   {id : 1, name: 'Item 1'},
//   {id : 2, name: 'Item 2'}
// ];



// GET: Retrieve all items 
app.get('/items',(req,res)=>{
  res.send('GET request to /items');
});

// paost a siemppe post request 
app.post('/items', (req,res)=>{
  res.send('post request to /items');
});

// put: a simple put request 
app.put('/items:id',(req , res)=>{
  res.send("put request to /items "+req.params.id);
});

// delete 
app.delete(port,()=>{
  res.send("delete request to /items")
})



app.listen(port,()=>{
  console.log("server is running on this port ok ");
})