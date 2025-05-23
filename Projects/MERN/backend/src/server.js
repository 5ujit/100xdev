
import express from "express";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();



const app = express();
const PORT= process.env.PORT || 5001



//middleware
app.use(express.json())// this middleware will parse JSON  bodies req.body 
app.use(rateLimiter);
/*
our simple custom middleware
app.se((req,res,next)=>{
    console.log(`Req method is ${req.method} & Req URL  is ${req.url}`);
    next(); 
    })
*/
app.use("/api/notes", notesRoutes);

connectDB().then(()=>{
app.listen(PORT,()=>{
    console.log("server start on PORT : PORT");   
});
})

















/**
 * MONGODB_URL=mongodb+srv://sujitsrivastav399:n9tIDrtr0xlnGlwv@cluster0.byrjb.mongodb.net/chatdb?retryWrites=true&w=majority&appName=Cluster0


 */