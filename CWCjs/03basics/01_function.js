function addTwoNumber(number1,number2){//<-- parameters 
    // let result =number1+number2
    // return result

    return number1+number2
}

//<-- calling the function
const result= addTwoNumber(3,5)// <-- arguments..

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username ){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in `
}




// console.log(loginUserMessage());//undefined 
// console.log(loginUserMessage("Hitesh"));




function calcualteCartPrice(a,b,...num1){
    return num1 
}


// console.log(calcualteCartPrice(200,400,500,2000));


const user ={
    username: "hitesh",
    price: 199
}

function handleObject( anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `);
    
}

handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200,400,100,600]

function returnSecondVlaue(getArray){
    return getArray[1]
}



// console.log(returnSecondVlaue(myNewArray));
