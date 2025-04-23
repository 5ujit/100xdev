const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hex.length);
    color += hex[index];
  }
  return color;
};

let colorChangeInterval; // Global variable

const startChangingColor = () => {
  if (!colorChangeInterval) {
    colorChangeInterval = setInterval(() => {
      const newColor = randomColor();
      document.body.style.backgroundColor = newColor;
      document.getElementById(
        "colorCode"
      ).innerText = `Generated Color: ${newColor}`;
    }, 1000); // every 1 second
  }
};

const stopChangingColor = () => {
  clearInterval(colorChangeInterval);
  colorChangeInterval = null; // reset
};

document.querySelector("#start").addEventListener("click",startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);



/*
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        const index= Math.floor(Math.random()*hex.length)
        console.log(i);
        console.log(index);
            
     color = color+ hex[index];
     
     console.log(color);
     
    }
return color
     

  
};
  
console.log(randomColor());

*/

//   document.querySelector("#start").addEventListener("click", function () {
//     document.body.style.backgroundColor = randomColor();
//   });

//  const generatePassword = function () {
//     const letters = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+=.>,<``~";
//     let password = "";

//     for (let i = 0; i < 6; i++) {
//       const index = Math.floor(Math.random() * letters.length);
//       password += letters[index];
//     }

//     return password;
//   };

//   console.log(generatePassword());
