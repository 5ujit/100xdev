// callback function



/*
// function 1
function mainFunction(callback){
  console.log("performing operation");
  
  setTimeout(function(){
    callback("operation complete");
  }, 3000);
}

// function 2
function callbackFunction(result){
  console.log("Result: " + result);
}

mainFunction(callbackFunction);


*/
















 // function 1
const mainFunction = (callback) => {
  console.log("performing operation");

  setTimeout(() => {callback("operation complete");}, 3000);};

// function 2
const callbackFunction = (result) => {
  console.log("Result: " + result);
};

mainFunction(callbackFunction);



