import { useState } from "react";

function APP(){
  const [exchangeData,setExchangeData]=useState({})
  const [bankData, setBankData]=useState({})
  

  fetch("https://google.com",async(res)=>{
    const json =await res.jaon();
    setBankData({income:100});
  });

  setTimeout(()=>{
    setExchangeData({
      return :100
    });
  },1000);

  const  incomeTax=(bankData.income+ exchangeData) * 0.3;

  return(
    <div>
      hi there ,your income tax return are {incomeTax}
    </div>
  )

}

export default App