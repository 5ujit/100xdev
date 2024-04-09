// call backs function
// step 1 can u cal one function inside another function


/*

const sq =(s)=>{
  return s*s;
}
const  addisq= (a,b)=>{
  const val1 = sq(a);
  const val2 = sq(b);
  return val1 +val2;
}
console.log(addisq(2,4));

*/











/*

const square=(n)=>{
  return n*n;

}
const  cube = (n)=>{
  return n*n*n;
}




const sumOfS=(a,b)=>{
  const val1 = square(a);
  const val2 = square(b);

  return val1 +val2;
}










const sumOfc= (a,b)=>{
  const val1 = cube(a)
  const val2 = cube(b)

  return val1 + val2;
}
// console.log(sumOfS(2,4));


const ans = sumOfc(2,4)
console.log(ans);

// console.log(cube(4));



 */



// callback function 3 argument

const  square=(a)=>{
  return a*a;
}

const sumOfSomthing=(a, b,fn)=>{
  const val1 = fn(a);
  const val2 = fn(b);
  return val1 + val2;

}

const ans = sumOfSomthing(2,4,square)
console.log(ans);
  
