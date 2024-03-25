//block scope vs function



// let and const are block scope
// var is function scope 
/*
{
  var firstName= "sujit";
  console.log(firstName);

}



{
  var firstName= "Srivastav";
  console.log(firstName);



}
*/

// let vs var and const 


/*      var
we can access the variable outside the scope var 
        let and const 
we cannot access the variable or that value outside the scope 
*/


function myApp(){
  if(true){
    let firstName = "Sujit";
    console.log(firstName);
  }
  console.log(firstName);
}
myApp();