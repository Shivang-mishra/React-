import { useState } from 'react'

import './App.css'
import Nav from './component/Nav/Nav'
import Hero from './component/Hero/Hero'
import Footer from './component/Fotter/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Hero/>
      <Footer/>
    </>
  )
}

export default App
