const myObject={
    js:'javascript',
    cpp:'c++',
    rb:"rubby",
    swift: "swift by apple"

}
for (const abc in myObject){
    // console.log(key);
    // console.log(myObject[abc]);
    // console.log(`${abc} shortcut is for ${myObject[abc]}`);
    
    
}

const programming =["js","rb","py","java","cpp"]

for (const key in programming){
    // console.log(programming[key]);
}



const map = new Map()
map.set('In',"India")
map.set('USA',"United State of America")
map.set('Fr',"France")
map.set('In',"India")


for (const key in map) {
    console.log(key);
}

