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
            type="text"
            value={a}
            onChange={(e) => setA(parseInt(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          b:
          <input
            type="text"
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
 
 





/*

import React, { useState } from 'react';

function SumComponent() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const sum = a + b;

  console.log('Calculating sum...');

  return (
    <div>
      <div>
        <label>
          a:
          <input
            type="text"
            value={a}
            onChange={(e) => setA(parseInt(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          b:
          <input
            type="text"
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


*/












/*

// exapale by harkitat 
import { useEffect, useMemo, useState } from 'react'

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // Some operation to get the data
    setExchange1Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setExchange2Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100
      });
    },5000)
  }, [])


  const cryptoRetruns =useMemo(()=>{
    console.log("hi there before");
    return exchange1Data.returns +exchange2Data.returns;
  },[exchange1Data,exchange2Data])
  
  const incomeTax = (cryptoRetruns + bankData.income) * 0.3

  return (
    <div>
        hi there, your income tax returns are {incomeTax}
    </div>
  )
}

export default App
*/
