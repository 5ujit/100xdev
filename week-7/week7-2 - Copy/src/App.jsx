// src/App.jsx
import React from 'react';
import Parent from './components/Parent';

const App = () => {
  const message = "Hello from App!";

  return (
    <div>
      <h1>Prop Drilling Example</h1>
      <Parent message={message} />
    </div>
  );
};

export default App;





















/*import { useContext,useState } from "react"
import { CountContext } from "./context";


function App() {
  const [count,setCount]=useState(0);
  return (
    <div>
     <CountContext.Provider value={count}>
      <Count setCount={setCount} />
     </CountContext.Provider>
    </div>
  )
}

function Count({setCount}){
  return <div>
    <CountRenderer />
    <Buttons setCount={setCount}/>
  </div>
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons({setCount}){
  const count= useContext({CountContext});
    return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App
*/