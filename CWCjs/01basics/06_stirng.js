const name = "hitesh"
const repoCount=50;

// console.log(name + repoCount + " value");
// 👆🏻👆🏻👆🏻 this is old style 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);



const gameName=new String('hitesh-hc');

// console.log(gameName[0]);

// console.log(gameName.__proto__);
// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));

// console.log(gameName.indexOf('t'));

// const newString= gameName.substring(0,4)//hite

// console.log(newString);

const anotherString=gameName.slice(-8,4);

console.log(anotherString);


const newStringOne="    hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

 const url ="https://htesh.com/hitesh%20choudhary"

 console.log(url.replace('%20','-'));
 
console.log( url.includes('sun'));

//now if i want to change string into array

console.log(gameName.split('-'));
