const fs = require('fs');

fs.readFile("topics.txt","utf-8", function(err,data){
  console.log(data);
});


console.log("hi there 1 ");

let a = 0;
for (let i= 0; i<100000000; i++){
  a++;
}
console.log("hi there2");