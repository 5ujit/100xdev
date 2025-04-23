const randomColor =()=>{
  const hex= "0123456789ABCDEF"
  let color= "#"
  for(let i=0; i<6; i++){
    const index=Math.floor(Math.random()*hex.length);
    color +=hex[index];
  }
  return color;
};

let colorChangeInterval; // Global vaivle 

const startChangingColor=()=>{
  if(!colorChangeInterval){
    colorChangeInterval=setInterval(()=>{
      const newColor= randomColor();
      document.body.style.backgroundColor= newColor;
      
      document.getElementById('colorCode').innerHTML=`Generated Color: ${newColor}`;

    },1000);
  }
}

const stopChangingColor=()=>{
  clearInterval(colorChangeInterval);
  colorChangeInterval= null ; //reset
}

document.querySelector("#start").addEventListener("click",startChangingColor);

document.querySelector("#stop").addEventListener("click",stopChangingColor);





















// const randomColor = function () {
//   const hex = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     const index = Math.floor(Math.random() * hex.length);
//     color += hex[index];
//   }
//   return color;
// };

// // console.log(randomColor());


// const startChangingColor= ()=>{
//   document.body.style.backgroundColor= randomColor();
// }

// const stotChangingColor=()=>{
//   clearInterval(colorChangeInterval);
// }


// document.querySelector("#start").addEventListener("click", function () {
//   const newColor = randomColor();
//   document.body.style.backgroundColor = newColor;
//   document.getElementById("colorCode").innerText = `Generated Color: ${newColor}`;
// });

// document.querySelector("#stop").addEventListener
// ("click",stotChangingColor)



