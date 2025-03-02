import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [render ,setRender]=useState(true);
  useEffect(()=>{
    setInterval(()=>{
      setRender(r=>!r);
    },1000)
  },[])
  return (

    <>
     {render ? <MyComponent/>: <div>vanish</div>}
    </>
  )
}



class MyComponent extends React.Component{
  componentDidMount(){
    console.log("component mounted");
    
  }
  componentWillUnMount(){
    console.log("Unmounted");
   console.log("lo");
    

  }
  render(){
    return<div> hi there </div>
  }
}


export default App


console.log("unmounted");

/*
function MyComponent() {
  useEffect(() => {
   console.error("conponent mounted");
   

    return () => {
      console.log("component unmounted");
      };
  }, []);

  return <div>
    form inside my compooooooo
  </div>

}

*/