import { useCounter } from "./counter";
const App=()=>{
  const {count,increment}=useCounter(0);

  return (
    <div>
      <h2>Counter : {count}</h2>
      <button onClick={increment}> click me  </button>
    </div>
  )
}

export default App