import React, { useState } from 'react'

const App = () => {
  const [count ,setCount]=useState(0)
  return (
    <div>
      <p  > this is count {count}  </p>
      <button onClick={()=>setCount(count+1)} > click me </button>
    </div>
  )
}

export default App
