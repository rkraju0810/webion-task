import React from 'react'
import logo from '../assests/FoodieLogo.png'
import './header.css';
const Header = () => {
    return (
        <header>
            <div className='navbar'>
                <img src={logo}  className="logo" alt="logo" />
                <button className="nav-btn">Join the Waitlist</button>
            </div>
        </header>
    )
}

export default Header