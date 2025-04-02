// singleton
// Object.create

// object literals
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

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log([mySym]);



JsUser.email="sujit@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email="sujit@microsoft.com"
// console.log(JsUser);


JsUser.greeting= function(){
  console.log("Hello js user");
}

JsUser.greetingTwo= function(){
  console.log(`Hello js user, ${this.name} `);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




    // console.log("___++++++__");

// console.log(JsUser["greeting"]());























