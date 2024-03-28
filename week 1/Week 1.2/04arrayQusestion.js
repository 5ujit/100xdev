
// write a program prints biggest no in Array 

let a = [12,23,43,22,20,10,5,26,100];
let max = -Infinity;
for(let i=0;i < a.length; i++){
  if(a[i] > max){
    max = a[i];
  }
}
console.log(max);
