for (let i = 0; i <10; i++) {
    // console.log(`Outer loop i = ${i}`);
    for (let j = 1; j <=10; j++) {
        // console.log(`  Inner loop value ${j} and inner loop for i ${i}`);// yaha to k kese work kar raha hia 
    
        // console.log(i + ` * ` + j + ` = ` +i*j); 
    }    
    // console.log("End of one outer loop round");// ki wo yaha tak kese paucha 
        
}


// let myArray=["flash","batman","superman"]
// console.log(myArray.length);
// for (let i = 0; i <=myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);   
// }



// break and continue 
for (let i = 0; i < 10; i++) {
    if (i == 5) {   
        break;
        }
        console.log(i);
        }

for (let index = 1; index < 20; index++) {
    console.log(`value of i is ${index}`);
    
}
//  continue

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
        }
        console.log(i);
        }

        
        // //  while loop
        // let i = 0;
        // while (i < 10) {
        //     console.log(i);
        //     i++;
        //     }
        //     //  do while loop
        //     let i = 0;
        //     do {
        //         console.log(i);
        //         i++;
        //         } while (i < 10);
        //         //  for of loop
        //         let fruits = ["apple", "banana", "cherry"];
        //         for (const fruit of fruits) {
        //             console.log(fruit);
        //             }
        //             //  for in loop
        //             let person = {name: "John", age: 30};
        //             for (const key in person) {
        //                 console.log(`${key} : ${person[key]}`);
        //                 }
        //                 //  for of loop with array of objects
        //                 let people = [
        //                     {name: "John", age: 30},    
        //                     {name: "Alice", age: 25},
        //                     {name: "Bob", age: 40}
        //                     ];
        //                     for (const person of people) {
        //                         console.log(`${person.name} : ${person.age}`);
        //                         }
