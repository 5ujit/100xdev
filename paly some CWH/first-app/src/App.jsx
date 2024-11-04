import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Card from './Components/Card'

const App = () => {
  return (
   <>

    <Navbar/>
    <Footer/>
    <div className='cards' > 
      <Card card title="card 1" description="card 1 desc" />
      <Card card title="card 2" description="card 2 desc" />
      <Card card title="card 3" description="card 3 desc" />
      <Card card title="card 4" description="card 4 desc" />
      
    </div>
   </>
  )
}

export default App
