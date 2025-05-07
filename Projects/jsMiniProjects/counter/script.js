const count = document.querySelector(".count");
const minuButn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const changeBy= document.querySelector('.changeby');

const reset = document.querySelector(".reset");

plusBtn.addEventListener("click", () => {
  const countVal = parseInt(count.innerText);
  const  chageByvalue = parseInt(changeBy.value)
  count.innerText = countVal + chageByvalue;


// count.innerText=parseInt(count.innerText) +1
});

minuButn.addEventListener("click", () => {
  const countVal = parseInt(count.innerText);
  const  chageByvalue = parseInt(changeBy.value)
  console.log(countVal);

  count.innerText = countVal - chageByvalue;
});


reset.addEventListener("click",()=>{
    // const reCount= parseInt(count.innerText);
    count.innerText='0'
})