import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const calculateSum = (num) => {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  };

  const sum = calculateSum(inputValue);

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setInputValue(Number(e.target.value))}
        placeholder="Enter a number"
      />
      <br />
      <h2> Sum of numbers up to {inputValue} is {sum} </h2>
      <br />
      <button onClick={() => setCounter(counter + 1)}>
        Counter ({counter})
      </button>
    </div>
  );
}

export default App;
