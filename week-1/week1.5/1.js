function findSum(n){
  let ans = 0;

  for(let i= 0; i<n; i++){
    ans = ans +i;
  }

  return ans; // return of findSum function
}

function findSum2till100() {
  console.log(findSum(100));
}

setTimeout(findSum2till100, 1000)
console.log("hello world");
// findSum2till100();f