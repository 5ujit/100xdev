import React from "react";
import { useState } from "react";

const App = () => {
  const [color, setcolor] = useState("olive");
  return (
    <div
      className="w-full  h-screen duration-200 "
      style={{ background: color }} 
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">


          <button
            className="outline-none px-4 py-1 rounded-full text-white  "
            style={{ backgroundColor: "green" }}
            onClick={()=>setcolor("green")}>
            green
          </button>

          

          <button
            className="outline-none px-4 py-1 rounded-full text-white  "
            style={{ backgroundColor: "blue" }}
            onClick={()=>setcolor("blue")}>
            blue
          </button>


          <button
            className="outline-none px-4 py-1 rounded-full text-white  "
            style={{ backgroundColor: "red" }}
            onClick={()=>setcolor("red")}
            >
            Red
          </button>


        </div>
      </div>
    </div>
  );
};

export default App;
