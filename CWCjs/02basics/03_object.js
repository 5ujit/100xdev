// singleton

// objeect literals
// Object.create

const JsUser={ 
    name: "Hitesh",
    "fullname": "hitesh",
    mySyn: "mykey1",
    age: 18,
    location:"Gurgoan",
    email: "Sujit@Google.com",
    isLocation: false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["fullname"]);
console.log(JsUser[mySyn]);


JsUser.email="hitesh@chatgpt.com"
Object.freeze(JsUser)
JsUser.email="hitesh"
