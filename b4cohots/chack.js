// function mainFunction(callback){
//   console.log("performing operation");
  
//   setTimeout(function(){
//     callback("operation complete");
//   }, 3000);
// }
// function 1
const mainFunction = (callback) => {
  console.log("performing op");

  setTimeout(() => {
    callback("op is now complete");
  }, 2000);
};
// function 2
const callbackFunction = (result) => {
  console.log(result);
};

mainFunction(callbackFunction);
