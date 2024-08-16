async function getUserData(){

document.getElementById('user-name').textContent= "fetching user data.....";
    

//Fetch the user data
const response = await fetch('https://jsonplaceholder.typicode.com/users/3')
const userData=  await response.json();

document.getElementById('user-name').textContent= `User's name is : ${userData.address.suite}`;

}

getUserData();















