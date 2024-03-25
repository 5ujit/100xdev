// object 
//  react 
const person ={
  firstName: "sujit",
  gender: "male",
  age: "500"
}
/*
function printDetails(obj){
  console.log(obj.firstName);
  console.log(obj.gender);
  //console.log(obj.age);// undefined   this age is available in person object 
  //so the output is undefined ok
}

*/



function printDetails({firstName, gender, age}){
  console.log(firstName);
  console.log(gender);
  console.log(age);
}


printDetails(person);