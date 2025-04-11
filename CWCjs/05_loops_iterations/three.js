// for of 

// ["","","",""]
// [{},{},{},]

const arr =[1,2,3,4,5];


for (const element of arr) {
    // console.log(num);
    
}

const greeetings="Hello world !"
for (const greet of greeetings) {
    // if (greet===" "){
    //     break
    // }
    // console.log(`Each char is ${greet}`);
    }


    //<Maps
/*
map store data set uniquly and it is store data set at one time if now 
it is store data set at one time if now u wnat to store In 
 map.set('In',"India") it won't take

*/
    const map = new Map()
    map.set('In',"India")
    map.set('USA',"United State of America")
    map.set('Fr',"France")
    // map.set('In',"India") can't print 
    // console.log(map);
    

    for (const [key, value] of map) {
    // for (const key of map) {
        console.log(key,':-' ,value);

    }

    const myObject ={
        'game1':'NFS',
        'game2':'GTA',
        'game3':'FIFA'
    }
    for (const key in myObject) {
        console.log(key,':-' ,myObject[key]);
        }
        