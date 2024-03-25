// lexical space


const myVar = "value1";

function myApp(){
 
  function myfunc(){
    // const myVar= "value59";
    const  myfunc2=()=>{
      console.log("inside  myFunc", myVar);
    }
    myfunc2();
  }



  console.log(myVar);
  myfunc();


}
myApp();