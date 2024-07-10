

import React, { useState,useCallback, useEffect,useRef   } from "react"

// import './App.css'
function App(){
  const [length,setlength]=useState(8)
  const [numberAllowed,setNumberAlloud]=useState(false)

  const [charAllowed, setCharAllowed]= useState(false)

  const [password,setPassword]=useState("")

  const passwordRef=useRef(null)


  const passwordGenerator =useCallback(()=>{
    let pass=""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str +="0123456789"
    if(charAllowed)  str+="!@#$%^&*()_+-=[]{}|;:,.<>?/~`'"

    for (let i =1; i<=length; i++){
      let char =Math.floor(Math.random()* str.length+ 1)
      pass +=str.charAt(char)
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])
  
  const copyPassWordToClipboard=useCallback(()=>{
   /*👉 passwordRef.current?.select() 👈this method do select 
   blue color effect which user can see and came to know what is select */
  /* 👉 passwordRef.current?.setSelectionRange(0,5); 👈 
  this works in range select in the particular range */
  passwordRef.current?.select()
     window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <div>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg py-3 px-4 my-8 text-orange-500 bg-gray-800'>
   <h1 className=" text-white text-center  my-3">password generator</h1>
   <div className="flex shadow rounded-lg overflow-hidden mb-4">
    <input 
    type="text"
    value={password}
    className='outline-none w-full py-1 px-3'
    placeholder="password"
    readOnly
    ref={passwordRef}

     /> 
     <button
     onClick={copyPassWordToClipboard}
     className="bg-blue-700 text-white px-3 py-0.5 shrink-0"
     >copy</button>
     </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e)=>{setlength(e.target.value)}}
          />
          <label >Length : {length}</label>

        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>{
            setNumberAlloud((prev)=> !prev);
          }}  
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id="characterInput"
          onChange={()=>{
            setCharAllowed((prev)=> !prev);
          }}  
          />
          <label htmlFor="characterInput">characters</label>
        </div>
        
      </div>









    </div>
    </div>
  )
}
export default App;

