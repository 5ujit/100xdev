function calculateArthmetic(a,b,arthmeticFinalfunction){
  const ans = arthmeticFinalfunction(a,b)
  return ans;
}
function sum(a,b){
  return a+b;
}
const value =calculateArthmetic(1,2, sum);
console.log(value);