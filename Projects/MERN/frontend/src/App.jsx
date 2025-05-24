import React from 'react'
import HomePage from './pages/HomePage'
import {Route ,Routes}from "react-router"
import CreatePage from './pages/CreatePage'
import NoteDetailpage from './pages/NoteDetailpage'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <button onClick={()=>{
        toast.success("congrats")
      }} className="text-red-500 p-4  bg-pink-50" > click me </button>
      <Routes>
        <Route path="/"  element={<HomePage/>}/>
        <Route path="/create"  element={<CreatePage/>}/>
        <Route path="/Note/:id"  element={<NoteDetailpage/>}/>
      </Routes>

    </div>
  )
}

export default App

