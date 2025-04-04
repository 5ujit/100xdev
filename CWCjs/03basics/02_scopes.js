var c=30;
let a= 300;
if (true){
    let a = 10;
    const b= 20;
    // console.log("INNER SCOPE:" , a);
    
}




// console.log(a);
// console.log(b);
// console.log(c);


function one (){
    const username = "hitesh"
    
    function two (){
        const website ="youtuve"
        // console.log(username);
    }
    // console.log(website);
    // two()
    
}
// one();


if ( true){
    const username ="hitesh"
    if(username ==="histesh"){
        const website =" youtube"
        console.log(username + website);
        
    }
    // console.log(website);

}
// console.log(username);


//++++++++++++++++++++++++++++++++++++++++++ interersting +++++++++++++++++++++
console.log(addOne(5));


function addOne(num){
    return num +1
}


addTwo(5)

const addTwo= function(num){
    return num +2
}

