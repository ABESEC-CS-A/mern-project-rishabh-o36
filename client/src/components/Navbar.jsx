import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <link to="/contact">Contact</link>
      <link to="/register">Register</link>
      <link to="/login">Login</link>
    </div>
  )
}

export default Navbar
