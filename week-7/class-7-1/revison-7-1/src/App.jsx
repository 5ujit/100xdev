// prop drilling ok 
import React, { useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0);
  
  return (
    <div>
      <Count />
      <Buttons />
      
    </div>
  )
}
function Count(){

}

function Buttons(){

}

export default App

