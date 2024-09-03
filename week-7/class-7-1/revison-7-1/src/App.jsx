import{lasy, Suspense }from "react";
import {BrowserRouter,Routes,Route, useNavigate }from 'react-router-dom'
import './App.css'

const  Dashboard=  lazy(()=>import('./Components/Dashboard'))
const  Landing = lazy(()=>import('./Components/Landing'))

function App() {
  


  return (

    <div>
      


    <BrowserRouter>
    <Appbar /> 
      <Routes>
        <Route path="/dashbord" element={<Suspense fallback={"loading..."} > <Dashboard /></Suspense>} />
        <Route path="/" element={<Suspense fallback={"loading..."}> <Landing /></Suspense>} />
        
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
