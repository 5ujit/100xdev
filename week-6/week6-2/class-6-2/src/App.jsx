import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react"

function App(){

const [inputValue,setInputValue]=useState(0)
const [counter,setCouner]=useState(1)

  let count =useMemo(()=>{
    let finalCount=0;
    for(let i=0; i<=Number(inputValue); i++){
      finalCount = finalCount  +i;
    }
    return finalCount; 

  },[inputValue])
  
 



  return (
    <div>
      <input
        type="number"
        placeholder="type a number"
      onChange={function(e){
        // console.log(e.target.value);
      setInputValue(e.target.value)
      }}
      /> <br />
      sum of {inputValue} is {count}

      <br />
      <button onClick={()=>{
        setCouner(counter +1)
      }}> counter {counter} </button>    
    </div>

  );
}
export default App





/*

cost [count,setCouner]=useEffect(0)

useEffect(()=>{
  let finalCount =0;
   for(let i=0; i<=Number(inputValue); i++){
      finalCount = finalCount  +i;
      }
      setCount(finalCount);

      },[inputValue])
*/