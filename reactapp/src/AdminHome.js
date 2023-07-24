import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import './adminhome.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="adnavbar">
      <div className="adcontainer">
        
        <div className="admenu-icon" onClick={handleShowNavbar}>
          <MenuIcon></MenuIcon>
        </div>
        <div className={`adnav-elements  ${showNavbar && 'adactive'}`}>
          <ul>
            <li>
              <NavLink to="/AdminHome">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog"></NavLink>
            </li>
            <li>
              <NavLink to="/projects">Customer Feedbacks</NavLink>
            </li>
            <li>
              <NavLink to="/Aprofile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/Vlogin">Logout</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div id="crud">
        <div id="crud1">
          <h1 id="cru">Add Products</h1>
        </div>
        <div id="crud2">
          <NavLink to="/Showpro">
          <h1 id="cru">Get Products</h1></NavLink>
        </div>
        <div id="crud3">
          <h1 id="cru">Update Products</h1>
        </div>
        <div id="crud4">
          <h1 id="cru">Delete Products</h1>
        </div>
      </div>
    </nav>
  )
}

export default Navbar