// white another function that display this risult in a pretty format no
function sum(num1, num2){
  let result  = num1 + num2;
  return result
}
console.log(sum(8,5));

function displayResult(data){
  console.log("Result of sum is :" +data);

}
function displayResultPass(ok){
  console.log("Sum result :"+ ok );
}

const ans = sum(1,2);
displayResultPass(ans);

// callbacks