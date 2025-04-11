const coding =["js", "ruby ","java", "python","cpp"]

const value= coding.forEach((item)=>{
    // console.log(item);
    
})

// console.log(value);


const value1= coding.map((item)=>{
    return item.toUpperCase()
})
// console.log(value1);
// 

const myNums= [1,2,3,4,5,7,5,3,6,8,10]
// const newNums = myNums.filter((num)=>{
//    return num>4
// })

const newNums=[]

myNums.forEach((num)=>{    
        if(num>4){
            newNums.push(num)
        }
        
    })

// console.log(newNums);


const books = [
    { title: 'The Hidden Path', genre: 'Mystery', publish: 2003, edition: 2006 },
    { title: 'Future Tense', genre: 'Science Fiction', publish: 2011, edition: 2013 },
    { title: 'Whispers of Time', genre: 'History', publish: 1995, edition: 1999 },
    { title: 'Mind Over Matter', genre: 'Science', publish: 2008, edition: 2012 },
    { title: 'Winds of Change', genre: 'Fiction', publish: 1984, edition: 1990 },
    { title: 'Voices Unheard', genre: 'Non-Fiction', publish: 2015, edition: 2018 },
    { title: 'Echoes from the Past', genre: 'History', publish: 1990, edition: 1994 },
    { title: 'Digital Dreams', genre: 'Science Fiction', publish: 2020, edition: 2023 },
    { title: 'Breaking Boundaries', genre: 'Science', publish: 2005, edition: 2010 },
    { title: 'Tales Untold', genre: 'Fiction', publish: 1999, edition: 2002 }
  ];
  

//   const userBooks=books.filter((bk)=>bk.genre==='History'  )

//   console.log(userBooks);
  

  const userBooks=books.filter((bk) =>  {
    return bk.publish>=2000 && bk.genre ==="Science"
  })
  console.log(userBooks);
  