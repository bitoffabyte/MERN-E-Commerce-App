import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

import './Navbar.css';

const Navbar = () => {
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset);
        };
    }, []);
    return (
        <nav
            className={`${
                offset >= document.body.scrollHeight * 0.5 ? 'onscroll' : ''
            }`}
        >
            <div className="logo">OLX</div>
            <input type="checkbox" id="click" />
            <label htmlFor="click" className="menu-btn">
                <i className="fas fa-bars"></i>
            </label>

            {offset >= document.body.scrollHeight * 0.5 ? (
                <div className="search_box1">
                    <input type="text" placeholder={`Try    "ER Diagrams"`} />
                </div>
            ) : null}

            <ul>
                <li>
                    <a>Log In</a>
                </li>
                <li>
                    <a>Sign Up</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
