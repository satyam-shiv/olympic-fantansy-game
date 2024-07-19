import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = ({username}) => {
 
  return (
  <nav>
    <Link to="/login" className='co'>Login</Link>
    <div className="username">Hi! {username} welcome</div>
  </nav>)
}

export default Navbar;