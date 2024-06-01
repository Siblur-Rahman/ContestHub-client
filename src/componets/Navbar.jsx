import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLink =<>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">Abut Us</NavLink></li>
            
            <li><NavLink to="/register">Register</NavLink></li>
            </>
    return (
       <div>
        <div className='flex gap-4 w-64 mx-auto'>
            {navLink}
        </div>
       </div>
    );
};

export default Navbar;