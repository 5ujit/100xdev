const user ={
    username: "hitesh",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
        
    }
}

// user.welcomeMessage();
// user.username ="sam"
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username ="hitesh"
//     console.log(this.username);
    
// }
//  chai()

// const chai= function (){
//     let username =" hitesth"
//     console.log(this.username);
    
// }

const chai=  ()=>{
    let username =" hitesth"
    console.log(this);
    
}

// chai()

// const  addTwo=(num1,num2)=>{
//     return num1+num2;
// }

// const  addTwo=(num1,num2)=> num1+num2;
// const  addTwo=(num1,num2)=> (num1+num2);
// const  addTwo=(num1,num2)=> {username : "hitesh"};// this is wrong 
const  addTwo=(num1,num2)=> ({username : "hitesh"});

console.log(addTwo(3,6));


// const myArray= [2,5,7,8,5]
// myArray.forEach()
