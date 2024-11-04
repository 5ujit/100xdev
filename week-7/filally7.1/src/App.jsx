import React from 'react'
import { useState } from 'react'

const App = () => {
  const [theme,setTheme]= useState('light');

  // toggle theme function
  const toggleTheme=()=>{
    setTheme(prevTheme=> (prevTheme=== 'light'? 'dark' : 'light' ));
  };
  return (
    <div>
      <Header theme= {theme} toggleTheme={toggleTheme} />
      
    </div>
  )
}
function Header ({theme,toggleTheme}){
  return(
    <header>
      <h1>Current Theme: {theme}  </h1>
      <ThemeThoggler theme={theme} toggleTheme={toggleTheme} />
    </header>
  )
}

function ThemeThoggler({theme,toggleTheme}){
  return (
    <button onClick={toggleTheme}>
      switch to  {theme==- 'light22'? 'dark': 'light'} mode 
    </button>
  )

}


export default App
