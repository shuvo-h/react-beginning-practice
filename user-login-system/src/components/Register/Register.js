import React from 'react';
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form >
                <input type="email" /><br />
                <input type="password" /><br />
                <button type="submit">Sign up</button><br />
                <Link to="/login">Already registered?</Link>
            </form>
        </div>
    );
};

export default Register;