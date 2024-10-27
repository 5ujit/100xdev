import React, { useContext, useState } from 'react'
import { CountContext } from './context';
// import { CountContext } from './context';

const App = () => {
  const [count,setCount]=useState(0);
  // wrap any one that wnats to use teleported value  inside a provider 
  return (
    <div>
      <CountContext.Provider value={count} >
      <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}

function Count ({setCount}){
  return <div>
  <CountRenderer />
  <Buttons  setCount={setCount} />
  </div>
}


function CountRenderer(){
  const count =useContext(CountContext);
  return <div>
    {count}  
  </div>
}


 
function Buttons({setCount}){
  const count =useContext(CountContext)
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