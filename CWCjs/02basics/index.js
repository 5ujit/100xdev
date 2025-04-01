const mySym=Symbol("key1")
const JsUser = {
    name: "sujit",
    "full name": "Hitesh Choudhary",
    [mySym]: "key1",
    age: 18,
    location: "Jaipur",
    email: "sujit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
  };
  


  JsUser.email = "sujit@brave.com"
  console.log(JsUser.email);
  Object.freeze(JsUser)
  JsUser.email = "sujit@microsoft.com"
  console.log(JsUser);


  JsUser.greeting= function(){
    console.log("Hello js user");
  }
  
  console.log(JsUser.greeting);




// output is undefiend 







// console.log([] + {});  
// console.log(typeof function(){}); // "function"



// console.log([] + {});  
// console.log({} + []);


// console.log([] + []);  
// console.log([] + {});  
// console.log({} + []);
// console.log({} + {});

