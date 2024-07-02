const express = require("express");
const bodyParser= require("body-parser")


const app = express();
const port = 3022;

app.use(bodyParser.json());

app.post('/backend-api/conversation', (req, res) => {
    const message= req.body.message; 
    console.log(message);
   res.json({
    output: "2 + 2= 4"
   }) 
    
   
});

app.listen(port, () => {
    console.log("Server is running on port", port);
});

