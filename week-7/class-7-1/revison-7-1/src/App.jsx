import {BrowserRouter,Routes,Route}from 'react-router-dom'
import './App.css'
import Dashboard from './Components/Dashboard'
import Landing from './Components/Landing'

function App() {

  return (
    <div style={{background: "black", color: "white"}}>
    <BrowserRouter>
      <Routes>
        <Route path="/dashbord" element={<Dashboard />} />
        <Route path="/" element={<Landing />} />
        
      </Routes>
    </BrowserRouter>
  </div>
     )
}

export default App
