import React, { createContext } from 'react'
import ChildA from './ChildA'


/**
 * what is context Api
 * create ,provider ,consumer
 * How to use it?
 * is context api also problematic?
 */
const data= createContext();
const data1= createContext();

const App = () => {
  const name= "Roky bahi";
  const gender ="male";
  return (
    <div>
   <data.Provider value={name}> 
    <data1.Provider value={gender}>
    <ChildA />
    </data1.Provider>
   </data.Provider>
     
    </div>
  )
}

export default App;
export {data, data1};
