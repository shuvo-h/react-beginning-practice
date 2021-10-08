import React from 'react';
import './header.css';
import {Link} from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <nav>
                <Link to="/home" className="link">Home</Link>
                <Link to="/shipping" className="link">Shippling</Link>
                <Link to="/register" className="link">Regiter</Link>
                {!user.displayName && <Link to="/login" className="link">Login</Link>}
                {user.displayName && <Link to="/login" className="link" onClick={logOut}>Log out</Link>}
            </nav>
            <div>
                <h3>{user.displayName}</h3>
                <h3>{user.email}</h3>
                <img src={user.photoURL} alt="" />
            </div>
        </>
    );
};

export default Header;