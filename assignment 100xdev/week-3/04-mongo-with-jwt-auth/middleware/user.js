const jwt =require("jsonwebtoken");
const {JWT_SECRET} = require("../config")

function userMiddleware(req, res, next) {
   const words= token.split(" ");
    const jwToken= words[1]
    const decodedValue=jwt.verify(jwToken,JWT_SECRET)
    if(decodedValue.username){
      req.username=decodedValue.username;
        next();
     }else{
        res.status(403).json({
            msg: "You are not authenticated"
        })
     }
}

module.exports = userMiddleware;