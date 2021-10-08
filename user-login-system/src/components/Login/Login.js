import React from 'react';
import {Link} from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInWithGoogle} = useAuth();
    return (
        <div>
            <h2>Login please</h2>
            <button  onClick={signInWithGoogle}>Google Sign In</button><br />
            <Link to="/register">New user?</Link>
        </div>
    );
};

export default Login;