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