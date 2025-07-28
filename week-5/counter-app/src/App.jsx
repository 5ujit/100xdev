
import {useState} from "react";

function App(){
  const [todos, setCount]= useState([{
    title: "go to gym ",
    dis: "go to gym from 1-2 ",
    compleated: false
  },{
    tutle: "Study DSA form ",
    complead: true
  }])

  return (
    <div>
      {JSON.stringify(todos)      }
    </div>
   );
}

// components
function customButton(props){
    
function onClickHandler(){
  props.setCount(count.count+1);
}  
    return 
    <button onClick={onClickHandler}>
      Counter {props.count} </button>
  }

export default App
