import React from 'react'
import "./Hero.css"
import Card from '../Card/Card'
import Audi from "../../assets/Audi.jpg"
import def from "../../assets/Defender.jpg"
import rr from "../../assets/Rangerover.jpg"
function Hero() {
  return (
    <div className='hero'>
    <Card  name= "Audi" price=" Rs 1cr" imageurl={Audi} />
    <Card   name ="Defender" price="Rs 2.5cr" imageurl={def} />
    <Card name= " Rangerover " price= " Rs 3.8cr" imageurl={rr} />
    </div>
  )
}

export default Hero