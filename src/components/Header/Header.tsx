import React from 'react';
import logo from '../img/logo/logo.png';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


export type HeaderType = {
    isAuth: boolean,
    login: string | null
}

const Header = (props: HeaderType) => {
    return(
        <header className={s.header}>
            <img className={s.header_logo}
                 src={logo}
                 alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div className={s.circle}></div>
                    : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    );
}

export default Header;