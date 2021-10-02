import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'


const Header = () => {

    return (
        <nav>
            <Link to="/home" className='nav-link'>Home</Link>
            <Link to="/about" className='nav-link'>About</Link>
        </nav>
    );
};

export default Header;