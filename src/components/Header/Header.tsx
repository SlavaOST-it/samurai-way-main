import React from 'react';
import logo from '../img/logo/logo.png';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


export type HeaderType = {
    isAuth: boolean,
    login: string | null,
    userPhoto: any
}

const Header = (props: HeaderType) => {

    const userPhoto = props.userPhoto.photos.large
        ? props.userPhoto.photos.large
        : "https://pbs.twimg.com/profile_images/977700491051323394/OiI5vDqo.jpg"

    return (
        <header className={s.header}>
            <img className={s.header_logo}
                 src={logo}
                 alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>
                        <img className={s.userPhoto} src={userPhoto} alt={"ss"}/>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    );
}

export default Header;