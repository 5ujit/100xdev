const fs = require("fs")

// Sync..
// fs.writeFileSync('./test.txt', "Hari bol  🖐🏻🤚🏻✋🏻✋🏻✋🏻✋🏻✋🏻✋🏻✋🏻✋🏻")


// async
// fs.writeFile('./test.txt',"Async Hare krishna ",(err)=>{});




// in sync task it needs some return here like thrugh varible or any
/* 
const result =fs.readFileSync("./contacts.txt","utf-8")


console.log(result);
*/

// in Async it need ( this is non anync)
// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
    
//     if(err){
//         console.log("error", err);

        
//     }else{
//         console.log(result);
        
//     }
// })


//appending any thing in new file okey 

// fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());


// fs.appendFileSync("./test.txt", `${Date.now()}Hey There\n`)
// fs.cpSync("./test.txt","./copy.txt");  // for copy file 

// fs.unlinkSync("./copy.txt")

//  console.log(fs.statSync('./test.txt').isFile());
 
fs.mkdirSync("my-docs/a/b",{recursive: true })