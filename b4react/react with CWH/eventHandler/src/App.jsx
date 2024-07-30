import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name ,setName]=useState("baba")
  const [form ,setForm]=useState({email: "",phone: ""})

  const handleClick = () => {
    alert("hey I am clicked");
  }

  const handleClickover = () => {
    alert("hey I am mouse over  ");
  }

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }


  return (
    <>
      <div className="button">
        <button onClick={handleClick}>click me </button>
      </div>

      {/* <div className='red' onMouseOver={handleClickover}>
        I am a red div
      </div> */}
      <input type="text" name="email" value={form.email} onChange={handleChange} />

      <input type="text" name="phone" value={form.phone} onChange={handleChange} />
 
    </>
  )
}

export default App
