import {BrowserRouter,Routes,Route, useNavigate, }from 'react-router-dom'
import './App.css'
import Dashboard from './Components/Dashboard'
import Landing from './Components/Landing'

function App() {
  


  return (

    <div>
      


    <BrowserRouter>
    <Appbar />
      <Routes>
        <Route path="/dashbord" element={<Dashboard />} />
        <Route path="/" element={<Landing />} />
        
      </Routes>
    </BrowserRouter>
  </div>
     )
}

function Appbar(){
  const navigate = useNavigate();
  return(
    <div>
       <div>
      
      <button onClick={()=>{
        navigate("/");
      }} >Landing Page </button>
    
      <button onClick={()=>{
        navigate("/dashbord");
      }} >Dashnoard </button>
    
    </div>
    </div>
   


  )
}

export default App
