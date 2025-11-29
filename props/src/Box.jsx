import React from 'react'
import "./App.css"
function Box({name ="shivang mishra" ,profession="web devlopment"}) {
    
  return (
    <div className='box'>
        <h1>{name}</h1>
        <h1>{profession}</h1>
    </div>
  )
}

export default Box