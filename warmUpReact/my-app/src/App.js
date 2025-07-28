import { useState } from "react"
// import React {useState}from 'react'


const App = () => {
  const array= useState(0);
  const Counter=array[0];
  console.log(array); 
  return (
    <div>
      <h1>Counter : {Counter}</h1>
      <button>Increase</button>
    </div>
  )
}

export default App
