const jwt = require("jsonwebtoken");
const value = {
    name: " harkirat",
    accountNumber: 121212121
}


const token = jwt.sign(value, "secret");

console.log(token);

/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiIGhhcmtpcmF0IiwiYWNjb3VudE51bWJlciI6MTIxMjEyMTIxLCJpYXQiOjE3MTgzNTY5ODJ9.QhgJjB4B7JQBqJG8K4033gQ40fSWI7SVrxN-rKTbvHw
*/