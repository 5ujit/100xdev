// const tinderUser =new Object()
const tinderUser={}


tinderUser.id="123abc"
tinderUser.name="Samy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "sujit",
            lastname: "srivastav",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
//sopose fullname is not exist so we can put ? after fullname
const obj1 ={1: "a", 2: "b" }
const obj2 ={3: "a", 4: "b" }
const obj4 ={5: "a", 6: "b" }



// const obj3 = {obj1, obj2}
// const obj3 =Object.assign({},obj1,obj2)
// const obj3 =Object.assign(obj1,obj2)

const obj3={...obj1,...obj2}

// console.log(obj3);

const users= [
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    },
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));

// console.log(tin);
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true 



const course={
    coursename:"js in hindi",
    price: "999",
    courseInstructructor:"hitesh"

}
// console.log(course.courseInstructructor);

const {courseInstructructor: instructor}= course

// console.log(courseInstructructor);
console.log(instructor);



// }
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free",
// }


[
    {},
    {},
    {}
]