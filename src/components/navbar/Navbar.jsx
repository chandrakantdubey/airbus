import React from 'react'
import { MdFlightTakeoff } from 'react-icons/md'
import { FaUserAlt } from 'react-icons/fa'
import './navbar.css'

const Navbar = ({loggedIn}) => {
  return (
    <div className="navbar--container">
        <nav className='navbar'>
            <div>
                <MdFlightTakeoff className='icon'/>
                <a href="/">
                    Airbus
                </a>
            </div>
            <div>
                <a href="/flights">Flights</a>
            </div>
            <div>
                <FaUserAlt className='icon'/>
                  {loggedIn || localStorage.getItem('loggedIn') ? <a href='/login'>User</a> : <a href="/login">Login</a>}
            </div>
        </nav>
    </div>
  )
}


export default Navbar