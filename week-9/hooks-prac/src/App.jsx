
import { useEffect, useState } from 'react'
import axios from 'axios'
// import "./App.css";

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    // axios.get("https://sum-server.100xdevs.com/todos")
    axios.get("https://dummyjson.com/todos")
      .then(res => {
        setTodos(res.data.todos);
      })
  }, [])

  return (
    <>
     {todos.map(todo => <Track key={todo.id} todo={todo} />)}

    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App




































/*
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
*/
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