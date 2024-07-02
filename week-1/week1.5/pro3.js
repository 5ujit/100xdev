function adarashbahau(){
  let p= new Promise(function(resolve){
    // do some async logic here 
    resolve("hi there ! bala");
  });
  return p;

}
function main(){
  adarashbahau().then(function(value){
    console.log(value);
  })
}
main();