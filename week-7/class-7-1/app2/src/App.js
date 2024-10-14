import React from 'react'
import ChildA from './ChildA'


/**
 * what is context Api
 * create ,provider ,consumer
 * How to use it?
 * is context api also problematic?
 * 
 */

const App = () => {
  const name= "Roky bahi";
  return (
    <div>
      <ChildA name={name} />
     
    </div>
  )
}

export default App
