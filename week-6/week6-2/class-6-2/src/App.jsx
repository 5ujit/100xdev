import React, { memo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function logSomething() {
    console.log("child clicked");
  }

  return (
    <div>
      <ButtonCounter inputFunction={logSomething} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me {count}
      </button>
    </div>
  );
}

const ButtonCounter = memo(({ inputFunction }) => {
  console.log("child render");

  return (
    <div>
      <button onClick={inputFunction}>button clicked</button>
    </div>
  );
});

export default App;
