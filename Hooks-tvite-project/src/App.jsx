import { useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(0)

  return (
    <>
     <h1> {count}</h1>
     <button onClick={ ()=>{
       setCount(++count)
     }
     }>increament</button>
    </>
  )
}

export default App
