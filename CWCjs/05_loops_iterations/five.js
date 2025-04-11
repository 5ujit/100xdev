const coding =["js", "ruby ","java", "python","cpp",]


coding.forEach(function  (item){
    // console.log(item);
})


// arrow function 
// coding.forEach((item)=>{
//     console.log(item);
    
// })


// function printMe(item){
//     console.log(item); //⤵️⤵️⤵️
// }
//🔻🔻🔻🔻🔻👇🏻👇🏻👇🏻⬇️⬇️⬇️

// coding.forEach(printMe)



/*
coding.forEach((item,index, arr)=>{
    console.log(item , index, arr);
})




js 0 [ 'js', 'ruby ', 'java', 'python', 'cpp' ]
ruby  1 [ 'js', 'ruby ', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby ', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby ', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby ', 'java', 'python', 'cpp' ]
*/


const myCodding =[
    {
        languageName: "javascript",
        languageFileName: "js"

    },

    {
        languageName: "java",
        languageFileName: "java"

    },

    {
        languageName: "python",
        languageFileName: "py"

    },
]

myCodding.forEach((item)=>{
    console.log(item.languageName);
    
})

