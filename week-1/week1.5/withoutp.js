const fs =require('fs');
const a =(abc)=> {
     fs.readFile("a.txt","utf-8",(err,data)=>
     {abc(data);});     }

const apple=(data)=>{
  console.log(data);
}
a(apple);  