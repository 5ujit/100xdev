/* Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise */
const jwt = require("jsonwebtoken");
const decodeJwt = (token) => {
    const decoded = jwt.decode(token)
    if (decoded) {
        return true;
    } else {
        return false;
    }
}

console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"));
