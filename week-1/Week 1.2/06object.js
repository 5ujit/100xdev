const allUsers= [{
  firstName: "sujit",
  gender : "male"
}, {
  firstName: "ramen",
  gender: "male"
},{
  firstName: "priya",
  gender:  "female"

}]
console.log(allUsers);

for(let i= 0; i<allUsers.length; i++){
  if(allUsers[i]["gender"]== "female"){
    console.log(allUsers[i]["firstName"]);
  }
}