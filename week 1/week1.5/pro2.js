function sujitBhai(){
  let p = new Promise(function(resolve){
    setTimeout(resolve,2000)
  });
  return p;
}
const value = sujitBhai();
value.then( function() {
  console.log("hello from promise");
})