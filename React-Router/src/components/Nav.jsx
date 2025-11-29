import { NavLink } from "react-router-dom"
import "../App.css"
function Nav() {
  return (
  
   <nav>
    <h1>LOGO</h1>
    <ul>
       <NavLink to="/" ><li>Home</li></NavLink>
       <NavLink to="about" ><li>About</li></NavLink>
       <NavLink to="contact" ><li>Contact US</li></NavLink>
        <li></li>
        <li></li>
    </ul>
   </nav>
   
  )
}

export default Nav