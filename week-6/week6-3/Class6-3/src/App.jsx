

























/*import { useEffect, useState } from 'react'

function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});
  console.log("hi there re-render");

  useEffect(function(){
    setTimeout(()=>{
      setBankData({income:100});
    },3000)
  },[])

  useEffect(()=>{
    setTimeout(() => {
      setExchangeData({
        returns: 100
      });
    }, 1000);

  },[])




  const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

  return (
    <div>
        hi there, your income tax returns are {incomeTax}
    </div>
  )
}

export default App


// this is use of use effect in this above code here 
*/






























/**
import { useState } from 'react'

function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});
  console.log("hi there re-render");

  setTimeout(()=>{
    setBankData({income:100})
  },3000);

  setTimeout(() => {
    setExchangeData({
      returns: 100
    });
  }, 1000);

  const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

  return (
    <div>
        hi there, your income tax returns are {incomeTax}
    </div>
  )
}

export default App

 */