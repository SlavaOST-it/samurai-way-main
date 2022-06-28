import React from 'react';
import s from './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <ul className={s.navbar_link}>
                <li>
                    <a href="/profile">Profile</a>
                </li>
                <li>
                    <a href="/dialogs">Messages</a>
                </li>
                <li>
                    <a href="src/components/Navbar/Navbar#">News</a>
                </li>
                <li>
                    <a href="src/components/Navbar/Navbar#">Music</a>
                </li>
                <li>
                    <a href="src/components/Navbar/Navbar#">Settings</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;