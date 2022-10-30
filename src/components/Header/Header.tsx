import React from 'react';
import logo from '../img/logo/logo.png';
import s from './Header.module.css';
import imgLogout from "../img/logo/logout-svgrepo-com.svg"
import {UserProfileType} from "../../Redux/profile-reducer";

export type HeaderType = {
    isAuth: boolean,
    logout: () => void,
    userPhoto: UserProfileType [],
}

const Header = (props: HeaderType) => {
    return (
        <header className={s.header}>
            <img className={s.header_logo}
                 src={logo}
                 alt="logo"/>
            <div>
                {props.isAuth &&
                    <div className={s.loginBlock}>
                        {/*<UserPhoto profile={props.userPhoto} className={s.userPhoto}/>*/}
                        <button
                            className={s.btnLogout}
                            onClick={props.logout}
                        ><img src={imgLogout} alt={"logout"}/></button>
                    </div>}
            </div>
        </header>
    );
}

export default Header;