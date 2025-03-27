import User from "../models/user.model.js";
import Message from "../models/message.model.js"
export const getUserForSidebar= async(req ,res)=>{
    try {
        const loggedInUserId= req.user._id;
        const filterdUsers= await User.find({_id: {$ne: loggedInUserId}}).select("_password")

        res.status(200).json(filterdUsers)
    } catch (error) {
        console.log("Error in getUserForSidebar: ", error.message);
        res.status(500).json({error:"Internal server error "})
        
        
    }
}


export const getMessages= async(req, res)=>{
    try {
        const {id:userToChatId }=req.parms
        const myId = req.user._id;

        const messages =await Message.find({
            $or:[
                {senderId:myId, receiverId:userToChatId},
                {senderId:userToChatId, receiverId:myId},
            ]
        })
        res.status(200).json(messages)
    } catch (error) {
        console.log("Error in getMessages controller ", error.message);
        res.status(500).json({error:"Internal server error"})
        
        
    }
}


export const sendMessage= async(req, res)=>{
    try {
        const {text , image}=req.body;
        const {id: receiverId}= req.params;
        const senderId= req.user._id;

        let imageUrl;

        if(image){
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl= uploadResponse.secure_url;
        }
        const newMessage= new Message({
            senderId,
            receiverId,
            text,
            image: imageUrl
        })
        await newMessage.save();

        // todo realtime functjionality gose here => sockiot io

        res.status(201).json(newMessage)
        
    } catch (error) {
        console.log("Error in sendMessage controller:",error.message);
        res.status(500).json({error: "Internal server error" })
        
    }

}