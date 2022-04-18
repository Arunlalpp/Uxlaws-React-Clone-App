import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
      <div>
        <Link to="/">Welcome </Link>
        <Link to="/About">About Us </Link>
        <h1 style={{color:'red'}}>Arunlalpp</h1>
        <Link to="/Shop">Shop Now </Link>
      </div>
    );
  }
  export default Navbar;