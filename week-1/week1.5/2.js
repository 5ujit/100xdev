// const fs = require("fs");

// fs.readFile("topics.txt","utf-8", function(err,data){
//   console.log(data);
// })

// console.log("hi there");


// let a = 0;
// for (let i= 0; i<10000000000; i++){
//   a++;
// }

// console.log("hi there 2");

console.log("hi there ");
// first api of 10 sec
setTimeout(function(){
  console.log("from the first api of  10 sec");
}, 10000)

setTimeout(function(){
  console.log("from the first api of  5 sec");
},5000)

let a=0;
for (let i=0; i<10; i++){
  a=a+i;
}
console.log(a);