// import express from "express"
import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();



const app = express();
const PORT= process.env.PORT || 5001

connectDB();

//middleware
app.use(express.json())// this middleware will parse JSON  bodies req.body 
/*
our simple custom middleware
app.se((req,res,next)=>{
    console.log(`Req method is ${req.method} & Req URL  is ${req.url}`);
    next();
    })
*/
app.use("/api/notes", notesRoutes);

app.listen(PORT,()=>{
    console.log("server start on PORT : PORT");   
});















/**
 * MONGODB_URL=mongodb+srv://sujitsrivastav399:n9tIDrtr0xlnGlwv@cluster0.byrjb.mongodb.net/chatdb?retryWrites=true&w=majority&appName=Cluster0


 */