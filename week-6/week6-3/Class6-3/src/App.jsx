import React, { useState, useMemo } from 'react';

function SumComponent() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const sum = useMemo(() => {
    console.log('Calculating sum...');
    return a + b;
  }, [a, b]);

  return (
    <div>
      <div>
        <label>
          a:
          <input
            type="number"
            value={a}
            onChange={(e) => setA(parseInt(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          b:
          <input
            type="number"
            value={b}
            onChange={(e) => setB(parseInt(e.target.value))}
          />
        </label>
      </div>
      <div>
        Sum: {sum}
      </div>
    </div>
  );
}

export default SumComponent;
/*👆☝️useMeno👆👆☝️*/


























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
