// import React, { useEffect , useRef} from 'react'

// const App = () => {
//   const inputRef= useRef(null);
// useEffect(()=>{
//   inputRef.current.focus();
// },[])
//   return (
//     <div>
//       <input ref={inputRef} placeholder='type here....' />
//     </div>
//   )
// }

// export default App



import React, { useRef } from "react";

function App() {
  const boxRef = useRef(null);

  const moveBox = () => {
    boxRef.current.style.transform = "translateX(200px)"; // Move box 200px to the right
    boxRef.current.style.transition = "transform 0.5s ease";
  };

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          width: "100px",
          height: "100px",
          background: "tomato",
        }}
      ></div>
      <button onClick={moveBox}>Move Box</button>
    </div>
  );
}

export default App;
