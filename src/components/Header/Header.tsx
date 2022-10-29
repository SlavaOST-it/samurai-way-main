import React from 'react';
import logo from '../img/logo/logo.png';
import s from './Header.module.css';
import photo from "../img/logo/user-logo.png"
import imgLogout from "../img/logo/logout-svgrepo-com.svg"


export type HeaderType = {
    isAuth: boolean,
    logout: () => void,
    userPhoto: any
}

const Header = (props: HeaderType) => {

     // const userPhoto = props.userPhoto.photos.small ? props.userPhoto.photos.small : photo

    return (
        <header className={s.header}>
            <img className={s.header_logo}
                 src={logo}
                 alt="logo"/>
            <div>
                {props.isAuth &&
                    <div className={s.loginBlock}>
                        <img className={s.userPhoto} src={photo} alt={"user photo"}/>
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