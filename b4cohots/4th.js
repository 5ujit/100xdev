// function isEven(number){
//   if(number % 2===0){
//     return true;
//   }
//   return false;
// }
// console.log(isEven(5));

// function isEven(number){
//   return number % 2===0;
// }
// console.log(isEven(10));

/*
Question => input :String
            output: firstcharacter 

function firstchar(string){
  return string[0];
}
console.log(firstchar('zbcd'));

*/



/*
Question => function
input : Array,target (number)
output: index of target if present in array 
*/




function findTarget(array, target){
  for (let i=0; i<array.length; i++){
    if(array[i]===target){
      return i;
    }
  }
  return  "not found";
}
const myArray= [1,2,3,44];
const ans = findTarget(myArray, NaN);
console.log(ans);