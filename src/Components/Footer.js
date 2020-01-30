import React from 'react';
import logo from './images/logo.png';

function Footer() {
    return (
        <footer id='footer'>
            <div className="footer-logo">
                <img id='logo' src={logo} alt='logo' />
                <h2>HOMEO</h2>
            </div>
            <div className="footer-content">
                <i className="fab fa-instagram social-icons"></i>
                <i className="fab fa-facebook-f social-icons"></i>
                <i className="fab fa-twitter social-icons"></i>
            </div>
            <div>
                <small>Copyright &copy; 2020 Homeo. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer;