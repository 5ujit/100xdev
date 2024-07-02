// var d = new Date();
// console.log(d.getDate());

// var d2= new Dome();
// console.log(d2.getDate());
var d =new Promise(function(resolve){
  setTimeout(function(){
    resolve("foo")  ;
  },1000)

});
console.log(d);

