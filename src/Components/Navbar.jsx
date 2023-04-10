import React from 'react'
import {NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className={'navitem'}>
        <div style={{ margin: '10px 20px' }}>
            <NavLink to="/" className={'NavStyle'}>Home</NavLink>
        </div>
        <div style={{ margin: '10px 20px' }}>
            <NavLink to="/students" className={'NavStyle'}>Students</NavLink>
        </div>
        <div style={{ margin: '10px 20px' }}>
            <NavLink to="/contact" className={'NavStyle'}>Contact Us</NavLink>
        </div>
           
    </div>
  )
}

export default Navbar