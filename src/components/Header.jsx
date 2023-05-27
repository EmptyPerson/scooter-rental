import React from 'react';
import './Header.css'
import logo from '../assets/img/logo.png';
import {Link} from 'react-router-dom';
import BookLink from "./partial/BookLink";

const Header = () => {
    const message = 'Hello. Could you help me with scooter?'

    return (
        <header>
            <div className='brand'>
                <div className='logo'>
                    <img src={logo} alt='Logo'/>
                </div>
                <div className='cta'>
                    <BookLink message={message}/>
                </div>
            </div>
            <nav className='nav'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/rentals'>Rentals</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li><Link to='/contacts'>Contacts</Link></li>
                    <li><a href='https://vladislav-bulakhov.web.app/' target='_blank' rel='noreferrer'>Development</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;