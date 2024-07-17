const jwt= require("jsonwebtoken");
const {JWT_SECRET} = require("../config")
// Middleware for handling auth

function adminMiddleware(req, res, next) {
    
    const token = req.headers.authorization; 
    const words= token.split(" ");
    const jwToken= words[1]
   try{
    const decodedValue=jwt.verify(jwToken,JWT_SECRET)
    console.log(jwToken);
    if(decodedValue.username){
        next();
     }else{
        res.status(403).json({
            msg: "You are not authenticated"
        })
     }
   }catch(e){
    res.status(403).json({
        msg:" incrrect inputs"
    })
   }
}

module.exports = adminMiddleware;