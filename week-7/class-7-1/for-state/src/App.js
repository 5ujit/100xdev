import React, { useRef, useState } from "react";
// what is useRef? -dom manipulate
// How to use it?

const App=()=>{

  const refElement= useRef("");
  const [name ,setName]=useState("Rocky");
  console.log(refElement);

  function Reset(){
    setName("");
    refElement.current.focus()
  }

  
  return (
    <>
      <h1>Learing useRef</h1>
      <input ref={refElement} type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>

      <button onClick={Reset} >Reset</button>
    </>
  )
}
export default App;