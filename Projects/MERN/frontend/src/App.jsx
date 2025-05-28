import {Route ,Routes}from "react-router"

import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import NoteDetailpage from './pages/NoteDetailpage'


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

