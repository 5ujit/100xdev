// function inside function

const app =()=>{
  const myfunc= ()=>{
    console.log("1st function ");
  }
  const mul=(num1 ,num2)=> num1*num2;
  
  const add2= (a,b)=>{
   return a+b;
  }
  console.log("inside app");
  myfunc();
  console.log(add2(2,3));
  console.log(mul(5,6));
}
app();