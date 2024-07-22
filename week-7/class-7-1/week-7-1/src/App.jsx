//App.jsx file
import { BrowserRouter, Route, Routes , useNavigate} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css'
const Dashboard= lazy(()=>import("./components/Dashboard"))
const Landing= lazy(()=>import("./components/Landing"))

// const Dashboard = lazy(()=>import ("./components/Dashboard") )
function App() {
  return (
    <div>
      <BrowserRouter>
      <Appbar />
        <Routes>
          <Route path='/dashboard'element={
            <Suspense fallback={'loading...'}>
              < Dashboard /></ Suspense>}/>




          <Route path='/'element={<Suspense fallback={'loading...'}>< Landing /></ Suspense>}/>
          
          
        </Routes>
      </BrowserRouter>
    </div>

      
  );
}
function Appbar(){
  const navigate= useNavigate();
  return <div>
  <button onClick={() => {
    navigate("/");
  }}>Landing page</button>

  <button onClick={() => {8
    navigate("/dashboard");
  }}>Dashboard</button>

</div>
          
};
export default App















/**
 * use navigatation
 * 
 
 * 
 * //App.jsx file
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import { Suspense,lazy } from 'react'
const Dashboard = lazy(()=>import ("./components/Dashboard") )
const Landing = lazy(()=>import ("./components/Landing" ) )

function App() {
  return (
    <div>
      <BrowserRouter>
      <Appbar />
        <Routes>
          <Route path='/dashboard'element={<Suspense fallback={'loading...'}>< Dashboard /></ Suspense>}/>
          <Route path='/'element={<Suspense fallback={'loading...'}>< Landing /></ Suspense>}/>
          
          
        </Routes>
      </BrowserRouter>
    </div>

      
  );
}
function Appbar(){
  const navigate= useNavigate();
  return <div>
  <button onClick={() => {
    navigate("/");
  }}>Landing page</button>

  <button onClick={() => {8
    navigate("/dashboard");
  }}>Dashboard</button>

</div>
          
};
export default App




 */