import React from 'react'
import "./Navbar.css"
import logo1 from '../../assets/logo1.png'

function Navbar() {
  return (
    <div className='navbar'>
        <h1 className='logo'>Ankit Kumar</h1>
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