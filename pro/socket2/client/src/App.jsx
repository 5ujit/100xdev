import React from 'react'

import {io} from "socket.io-client"



const App = () => {
  const socket = io("http://localhost:")
  return (
    <div>
      Hello
    </div>
  )
}

export default App