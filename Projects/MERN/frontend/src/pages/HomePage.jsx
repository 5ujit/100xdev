import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI'

const HomePage = () => {
  const [israteLimited,setisRateLimited]= useState(true)
  const [notes,setNotes]= useState([])
  const [loading,setloading]=useState(true)
  useEffect(()=>{
    const fetchNotes= async ()=>{
      try {
        const res = await fetch("http://localhost:5001/api/notes")
        const data= await  res.json();
        
      } catch (error) {
        
      }

    } 
    fetchNotes();
  },[])
  return (
    <div className='min-h-screen'>
      <Navbar/>
      {israteLimited && <RateLimitedUI />}
  
    </div>
  )
}

export default HomePage
