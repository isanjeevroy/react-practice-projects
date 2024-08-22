import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <ul>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/courses'>Courses</NavLink>
                <NavLink to='/support'>Support</NavLink>
                <NavLink to='/github'>Github</NavLink>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar