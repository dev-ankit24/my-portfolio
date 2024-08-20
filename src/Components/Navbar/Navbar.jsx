import React from 'react'
import "./Navbar.css"
import logo1 from '../../assets/logo1.png'

function Navbar() {
  return (
    <div className='navbar'>
        <img className='nav-logo' src={logo1} alt="" />
        <ul className="nav-menu">
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>

<div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar