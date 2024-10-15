// App.js

import React from 'react'
// import ChildA from './ChildA'
import ChildC from './ChildC';

const App = () => {
  const name= "Roky bahi";
  return (
    <div>
      {/* <ChildA name={name} /> */}
      <ChildC name={name} />
     
    </div>
  )
}

export default App
