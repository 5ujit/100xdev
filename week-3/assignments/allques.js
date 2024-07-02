/*- Write a function that takes in a username and password and returns a JWT token with the username encoded. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here
*/
const jwt = require('jsonwebtoken')
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

const signJwt = (username, password) => {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if (!usernameResponse.success || !passwordResponse.success) {
        return null;

    }

    const signature = jwt.sign({
        username
    }, jwtPassword);
    return signature;

}


const jwtverifyJwt = (token) => {
    let ans = true;
    try {
        const verified = jwt.verify(token, jwtPassword);
    } catch (e) {
        ans = false;
    }
    return ans;
}


const ans = signJwt("harksafd@gmail.com", "adjfkaasdfa")
console.log(ans);