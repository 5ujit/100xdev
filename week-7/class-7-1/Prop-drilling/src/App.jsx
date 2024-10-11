import React from 'react'
import Greeting from './components/Greeting';

const App = () => {
  const name = "shlok";
  return (
    <div>
      <h1>welocome to the app!</h1>
      <Greeting userName={name}/>
    </div>
  )
}

export default App
