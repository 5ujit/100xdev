import React from 'react'
import HomePage from './pages/HomePage'
import {Route ,Routes}from "react-router"
import CreatePage from './pages/CreatePage'
import NoteDetailpage from './pages/NoteDetailpage'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div data-theme="forest">
  
      <Routes>
        <Route path="/"  element={<HomePage/>}/>
        <Route path="/create"  element={<CreatePage/>}/>
        <Route path="/Note/:id"  element={<NoteDetailpage/>}/>
      </Routes>

    </div>
  )
}

export default App

