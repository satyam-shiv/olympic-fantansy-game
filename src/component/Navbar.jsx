import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({username}) => {
 
  return (
  <nav>
    <div className='flex-box'>
    <Link to="/login" className='co'>Login</Link>
    <div className="username">Hi! {username} <span>welcome</span> </div>
    </div>
    
  </nav>)
}

export default Navbar;