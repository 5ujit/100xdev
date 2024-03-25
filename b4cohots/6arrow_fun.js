// arrow functions
/* normal function 

const  singHappyBirthday= function(){
  console.log("happy birthday to you ....");
}
singHappyBirthday();

*/

// const  singHappyBirthday = ()=>{
//   console.log("happy birthday to you ....");
// }
// singHappyBirthday();

          /* 
          const love = ()=>{
            console.log("suit love coding "); 
          }
          love();
          console.log(setInterval(love,500));
          


console.log("_____________________________________________________________________________");


const sumThreeNo=(number1 ,number2,number3)=>
{ // parameter
  return number1 +number2+ number3;

}
const sum = sumThreeNo(2,3,4);
console.log(sum);









console.log("_____________________________________________________________________________");


const firstchar = function (string){
  return string[0];
}
console.log(firstchar('zbcd'));

console.log("this is arrow function ok after round brackets we put the => for the definition or return statement ");
const anyChar = (string)=>{
  return string[5];
}
console.log(anyChar ('appleMango'));


        // console.log("_____________________________________________________________________________");
        // const isEven= function (number){
        //   if(number % 2===0){
        //     return true;
        //   }
        //   return false;
        // }
        // const check = isEven(88)
        // console.log(check);
        
console.log("_____________________________________________________________________________");

const ifEven= number=>{
  if(number % 2===0){
    return "this is even ";
  }
  return " not even ok ";
}
const letsCheck =ifEven(90);
console.log(letsCheck);

console.log("_____________________________________________________________________________");


                // const findTarget=(array, target)=>{
                //   for (let i=0; i<array.length; i++){
                //     if(array[i]===target){
                //       return i;
                //     }
                //   }
                //   return  "not found";
                // }
                // const myArray= [1,2,3,44];
                // const ans = findTarget(myArray, 44);
                // console.log(ans);

const findIndex= (array,pos)=>{
  for (let i=0; i<array.length; i++){
    if(array[i]===pos){
      return i;
    }
    // return "not found";
  }
  return "not found";
}
const thisArray = [1,3,56,99,87];
const okFound= findIndex(thisArray, 99);
console.log(okFound);

 */

const firstchar= anyString=> anyString[4];
console.log(firstchar("SujitKumar"));