// rest parameters
/*
function myfunc(a,b,...c){
  console.log(`a is ${a}`);
  console.log(`b is ${b}`);
  console.log(`c is`,c);
}
myfunc(3,2,4,2,4,5,67,);


*/

// lets make a function to understand this concepet  better 


let addAll=(...numbers)=>{
  let total = 0;
 for (let number of numbers){
  total = total +number;
 }
 return total;

}
const ans=  addAll(1,2,4);
console.log(ans);


