/*let p = new Promise(function(resolve){
  resolve("hii from promise log");
});



p.then(function(){
  console.log(p);
})
*/

function sujitBhai(){
  let p = new Promise(function(resolve){
    resolve("hi there")
  });
  return p;
}
const value = sujitBhai();
  value.then(function(data){
    console.log(data);
  })


