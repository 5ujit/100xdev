// const User={
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

    // getUserDetails: function(){
        // console.log("Got user details form database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        
        
    // }
// }
// console.log(user.username);
// console.log(user.getUserDetails());



const user2={
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details form database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        
        
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());



// const promiseOne= new Promise()
// const date = new Date();


function User (username, loginCount, isLoggedIn){
    this.username= username;
    this.loginCount= loginCount;
    this.isLoggedIn= isLoggedIn

    return this
}

const userOne =new  User("hitesh", 12, true)
const uerTwo = new User("chaiAurCode", 11, false)

console.log(userOne);

