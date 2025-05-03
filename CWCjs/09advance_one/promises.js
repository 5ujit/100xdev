/*const promiseOne =new Promise (function (resoleve, reject ){
    setTimeout(function(){
        console.log('Async task is complete ');
        
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");

    
})

*/
// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })


// promiseFour
// .then((user) => {
//    console.log(user);
//    return user.username
// }).then((username) => {
//    console.log(username);
// }).catch(function(error){
//    console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))

// const promiseFive =new Promise ( function (resolve, reject){
  
//     setTimeout(function(){
//         let error =true
//         if(!error ){
//             resolve({username: "hitesh ",password : "123"})
//         }else{
//             reject('ERROR : JS went wrong')
//         }
//     },1000)

// })


// async function  getAlluser(){
// try {
//     const response=   await fetch("https://jsonplaceholder.typicode.com/users")
//     const data=await response.json()
//     console.log(data);
//     } catch (error) {
//     console.log("E: ", error );    
//     } 
// }

// getAlluser()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
    
})

