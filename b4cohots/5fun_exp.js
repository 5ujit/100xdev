// function expression = is store whole function in one variable
/*
console.log("   1s1");

function singHappyBirthday(){
  console.log("happy birthday to you ....");
}
*/


/*
const sumThreeNo=function(number1 ,number2,number3){ // parameter
  return number1 +number2+ number3;

}
const ans = sumThreeNo(2,3,4);
console.log(ans);

*/


/*

const isEven= function (number){
    if(number % 2===0){
      return true;
    }
    return false;
  }


  const check = isEven(88)
  console.log(check);
 

  */

  
const findTarget = function (array, target){
  for (let i=0; i<array.length; i++){
    if(array[i]===target){
      return i;
    }
  }
  return  "not found";
}

const myArray= [1,2,3,44];
const ans = findTarget(myArray, 44);
console.log(ans);