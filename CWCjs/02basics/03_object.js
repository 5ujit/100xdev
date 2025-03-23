// singleton
// Object.create

// object literals

const mySym = Symbol(123);

const mySym1 = Symbol(1);

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
console.log(typeof JsUser[mySym]);

console.log(JsUser[mySym]);

// // console.log(JsUser.email)
// // console.log(JsUser["email"])
// // console.log(JsUser["full name"])
// // console.log(JsUser[mySym])

// JsUser.email = "hitesh@chatgpt.com"
// // Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// // console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());
