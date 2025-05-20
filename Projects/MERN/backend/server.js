// import express from "express"
import express from "express";
import notesRoutes from "./routes/notesRoutes.js"

const app = express();

app.use("api/notes", notesRoutes);



app.listen(5001,()=>{
    console.log("server start on PORT : 5001");
    
});