import React, { useState, useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [anotherState, setAnotherState] = useState(0);

  // Expensive computation function
  const expensiveComputation = (num) => {
    console.log('Computing...');
    for (let i = 0; i < 1000000000; i++) {} // Simulate a heavy computation
    return num * 2;
  };

  // Memoized result
  const memoizedValue = useMemo(() => expensiveComputation(count), [count]);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>

      <h1>Another State: {anotherState}</h1>
      <button onClick={() => setAnotherState(anotherState + 1)}>Increment Another State</button>

      <h2>Expensive Computation Result: {memoizedValue}</h2>
    </div>
  );
}

export default App;


























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