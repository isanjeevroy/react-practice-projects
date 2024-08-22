import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <ul className='flex gap-6 w-[100vw] h-[70px] bg-zinc-300 items-center justify-center'>
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