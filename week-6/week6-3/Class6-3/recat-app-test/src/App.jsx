// use ref here in this code 

import { useCallback, useEffect, useRef, useState } from 'react'

function App() {

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("incomeTextContainer").innerHTML=10
    }, 5000);
  }, [])

  const incomeTax = 20000;

  return (
    <div>
        hi there, your income tax returns are <div id="incomeTextContainer">{incomeTax}</div>
    </div>
  )
}

export default App