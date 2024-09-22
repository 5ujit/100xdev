// src/App.jsx
import React from 'react'
import Parent from './components/Parent';


const App = () => {
  const message="hello form app!";
  return (
    <div>
      <h1> Prop Drilling Example </h1>
      <Parent message={message}/> 
    </div>
  )
}

export default App;
