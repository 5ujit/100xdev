const userEmail="";
if ( userEmail){
    console.log("got user email");   
}else{
    console.log("Don't hv user email");
    
}

// falsy values
/**
 * false 0,-0,Bigint 0n,"", null , undefefined , NaN
 * truthy values
 * true 1,1n," ", "Big", "a", "b", "c",{},[],funcion (){} funcion (){}
 * 
 * 
 
*/
// if(userEmail.length===0){
//     console.log("Aarray is empty");
    
// }

// const emptyObj={}

// if(Object.keys(emptyObj).length==0){
//     console.log("Object is empty");


// }

//Nullish Coalescing Operator) in JavaScript?
/*
let a;
a=5??10;
console.log(a);

let b= null;
c=b??10;
console.log(c);
*/



// let name = null;
// let 
//If a is NOT null or undefined, use a. Otherwise, u


/*

let val1;
val1 = 5 ?? 10;
console.log(val1);


*/



console.log("Terniary Operator");
// condition ? : false 
const iceTeaPrice=100;

iceTeaPrice >= 80? console.log("less then 80"): console.log("more then 80");

