// use ref here in this code 

import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [incomeTex, setIncomeTex]= useState(20000);

  const divRef=useRef();
  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML=10
    }, 5000);
  }, [])

  // const incomeTax = 20000;

  return (
    <div>
        hi there, your income tax returns are <div ref={divRef} >  {incomeTex} </div>
    </div>
  )
}

export default App