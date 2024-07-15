import React, { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:,.<>?/~`'";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div>
      <h1>Password Generator</h1>
      <input 
        type="text"
        value={password}
        readOnly
        ref={passwordRef}
      />
      <button onClick={copyPasswordToClipboard}>Copy</button>
      
      <div>
        <label>
          Length: 
          <input 
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          {length}
        </label>
      </div>

      <div>
        <label>
          <input 
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed(prev => !prev)}
          />
          Numbers
        </label>
      </div>

      <div>
        <label>
          <input 
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed(prev => !prev)}
          />
          Characters
        </label>
      </div>
    </div>
  );
}

export default App;
