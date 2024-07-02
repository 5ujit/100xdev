/*
 Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise
*/
const jwt = require('jsonwebtoken');
const jwtPassword = "secret";

const jwtverifyJwt = (token) => {
    let ans = true;
    try {
        const verified = jwt.verify(token, jwtPassword);
    } catch (e) {
        ans = false;
    }
    return ans;
}


const ans = verifyJwt("adfasdf");
console.log(ans);

