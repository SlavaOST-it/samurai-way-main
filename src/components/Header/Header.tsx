import React from 'react';
import logo from '../img/logo/logo.png';
import s from './Header.module.css';

const Header= () => {
    return(
        <header className={s.header}>
            <img className={s.header_logo}
                 src={logo}
                 alt="logo"/>
            <div className={s.header_name}>

            </div>
        </header>
    );
}

export default Header;