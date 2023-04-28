import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../Images/logo.jpg';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-img'>
                <img src={logo} alt='logo'className='navbar-img'/>
            </div>
            <div>
                <ul className='navbar-links'>
                    <li className='link'>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li className='link'>
                        <Link to='Menu'>MENU</Link>
                    </li>
                    <li className='link'>
                        <Link to='Cart'>CART</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
