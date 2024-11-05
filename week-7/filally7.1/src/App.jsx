import { createContext, useContext } from "react";
// create Themecontext
const ThemeContext = createContext();

const useTheme=()=>useContext(ThemeContext);
// custom hook to use ThemeContext
export const useTheme=()=useContext(ThemeContext);
//ThemeProvider component

export const ThemeProvider= ({children})=>{
  const [theme,setTheme]=
} 










/*
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
  Switch to {theme === 'light' ? 'dark' : 'light'} mode
</button>

  )

}


export default App
*/