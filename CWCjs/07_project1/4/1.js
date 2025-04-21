/*const randomConlor =function (){
  hex='0123456789ABCDEF'
  let color ='#'
  for(let i= 0; i<6; i++){
    color = color+ hex[(Math.random()*16)]
  }
  return color;
}

document.querySelector("#start").addEventListener()
*/

/**
 * I want to know why we use this each term like
 * I understood this =>>
document.querySelector("#start").addEventListener()
 but i want to know the code mean which we used upper each term plss explain me okey  
 */



 const generatePassword = function () {
    const letters = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+=.>,<``~";
    let password = "";
  
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * letters.length);
      password += letters[index];
    }
  
    return password;
  };
  
  console.log(generatePassword());
  