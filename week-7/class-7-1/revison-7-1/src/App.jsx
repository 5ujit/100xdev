import React, { useContext, useState } from 'react'
import { CountContext } from './context';

// this this useContext,

const App = () => {
  const [count,setCount]=useState(0);
  
  
  return (
    <div>
      <CountContext.Provider value={count}>
      <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}

function Count({setCount}){
  return <div>
    <CountRenderer />
   < Buttons setCount={setCount} />
  </div>
}

function CountRenderer(){
  const count = useContext(CountContext);
  return <div>
    {count} 
  </div>
}


function Buttons({setCount}){
  const count = useContext(CountContext)
  return <div>
    <button onClick={()=>{
      setCount(count+1)
    }}>Increas</button>
    
    <button onClick={()=>{
      setCount(count-1)
    }}>Decrease</button>
    
  </div>

}

export default App



















/*





import React, { useState } from 'react'
const App = () => {
  const [user, setUser] = useState("John");

  return (
    <div>
      <Child user={user} />
    </div>
  );
};

const Child = ({ user }) => {
  return (
    <div>
      <GrandChild user={user} />
    </div>
  );
};

const GrandChild = ({ user }) => {
  return <div>Hello, {user}</div>;
};
export default App

*/