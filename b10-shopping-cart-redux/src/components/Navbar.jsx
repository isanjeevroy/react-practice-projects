import React from 'react'
import logo from '../assets/logo.png'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {

  const { cart } = useSelector((state) => state);

  return (
    <div>

      <div className='flex flex-row justify-evenly items-center h-[60px] w-full bg-slate-400 fixed top-0'>
        <NavLink to="/">
          <img src={logo} alt="logo" className='w-28' />
        </NavLink>

        <div className='flex gap-4'>

          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className='relative'>
              <FaShoppingCart className='text-2xl' />
              {
                cart.length > 0 &&
                <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>
              }
            </div>
          </NavLink>

        </div>

      </div>

    </div>
  )
}

export default Navbar