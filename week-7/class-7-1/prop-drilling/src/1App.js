import React from 'react'


const App = () => {
  const name = "Rockey";
  return (
    <>
      <ChildA name={name} />
      
    </>
  )
}
const ChildA=({name})=>{
  return (
    <>
    
   
    <h1> {name} is my good friend  </h1>
    <ChildB name={name} />
    </>
  )
}



const ChildB =({name})=>{
  return(
    <>
    <ChildC name={name} />
    </>
  ); 
};

const ChildC=({name})=>{
  return (
    <>
    <h2> conponent C displaying {name}</h2>
    </>
  )
}






export default App





/*
import React from 'react'

const App = () => {
  const name = "Rockey";
  return (
    <div>
      
    </div>
  )
}

export default App
*/