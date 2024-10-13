
import React, { useEffect, useState } from "react";

function App(){

  const [count, setcounter]=useState(2); 
  const [data,setDtat]=useState("Ram");
  useEffect(()=>{
    console.log("conponent mounted");
    


  },[data])


  return(
    <>
     
     <h1>Button clicked {count} times</h1>
     <button onClick={()=> setcounter(count+1)} >click</button>

     <button onClick={()=>setDtat("Sita")} >Update data</button>



     
  
    </>
  )
}
export default App;