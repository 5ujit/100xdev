import React, { useState } from "react";
import { useRef } from "react";


/*What is useRef ? -dom
how it use it */

function App(){
  const [name , setName]=useState("hello ji")
  const refElement=useRef("");
  console.log(refElement);
  function Reset
  return (
    <>
    <h1> learning useRef</h1>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
    <button onClick={Reset}> Reset</button>
    </>
  )
}

export default App 