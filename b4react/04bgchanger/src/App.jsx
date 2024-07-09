import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full" bg-white px-3>  

          <button
          onClick={()=>setColor("red")}
           className="outline-none px-4 py-1 rounded-full text-white shodow-lg" style={{background: "red"}}
          > Red</button>

          <button 
          onClick={()=>setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shodow-lg" style={{background: "green"}}
          > Green</button>

          <button 
          onClick={()=>setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shodow-lg" style={{background: "blue"}}
          > blue</button>

          <button onClick={()=>setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ background: "rgb(249, 115, 22)" }}
          > Orange</button>
        </div>
      </div>
    </div>
  );
}

export default App;
