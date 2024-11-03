// src/App.jsx

import React, { useContext, useState } from 'react';
import { CountContext } from './context';

// Main App component
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Provide count state to components within the Provider */}
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
};

// Count component, managing count display and button interactions
function Count({ setCount }) {
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setCount} />
    </div>
  );
}

// CountRenderer component, displays the current count value
function CountRenderer() {
  const count = useContext(CountContext);
  return (
    <div>
      {count}
    </div>
  );
}

// Buttons component, provides functionality to increment and decrement count
function Buttons({ setCount }) {
  const count = useContext(CountContext);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  );
}

export default App;






































// propdrilling
/*
import React, { useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0);
  return (
    <div>
      <Count count={count} setCount={setCount} />
    </div>
  )
}

function Count ({count,setCount}){
  return <div>
 <div> {count} </div>
  <Buttons count={count} setCount={setCount} />
  </div>

}
 
function Buttons({count, setCount}){

  return<>
  <button onClick={()=>{
    setCount(count+1)
  }} >Incresing </button>
  
  <button onClick={()=>{
    setCount(count -1)
  }} >Decreasing </button>
  </>

}




export default App
*/