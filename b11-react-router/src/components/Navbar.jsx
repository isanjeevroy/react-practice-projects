import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { toast } from 'react-hot-toast';

function Navbar(props) {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className='flex justify-evenly'>
            <nav className='flex'>
                <ul className='flex gap-2'>
                    <li> <NavLink to="/">Home</NavLink> </li>
                    <li> <NavLink to="/">About</NavLink> </li>
                    <li> <NavLink to="/">Contact</NavLink> </li>
                </ul>
            </nav>
            <div className='flex gap-2'>
                { !isLoggedIn &&
                    <Link to="/login"><button >Login</button></Link>
                }
                { !isLoggedIn &&
                    <Link to="/signup"><button>Signup</button></Link>
                }
                { isLoggedIn &&
                    <Link to="/">
                        <button
                        onClick={()=>{
                            setIsLoggedIn(false);
                            toast.success("Logged out!");
                        }}
                        >Logout</button></Link>
                }
                { isLoggedIn &&
                    <Link to="/dashboard"><button>Dashboard</button></Link>
                }
                    
            </div>
        </div>
    )
}

export default Navbar