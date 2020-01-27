import React from 'react';
import logo from './images/logo.png';

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg'>
            <div className='container'>
                <a href='#' class='navbar-brand'>
                    <img id='logo' src={logo} alt=''/>
                </a>
                <a href='#' className='signup-btn'>GET STARTED</a>
            </div>
        </nav>
            )
        }
        
export default Navbar;