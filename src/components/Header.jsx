import React from 'react';
import './Header.css'
import logo from '../assets/img/logo_2.png';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className='brand'>
                <div className='logo'>
                    <img src={logo} alt='Logo'/>
                </div>
                <div className='cta'>
                    <a href='#' className='btn'>Book Now</a>
                </div>
            </div>
            <nav className='nav'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/rentals'>Rentals</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li><a href='#'>Contacts</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;