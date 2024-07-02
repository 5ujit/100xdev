function sujitBhai(){
  let p = new Promise(function(resolve){
    resolve("hi there love !!!!")
  });
  return p;

}
async function main(){
  const value = await sujitBhai();
  console.log(value);
}
main();