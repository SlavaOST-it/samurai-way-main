import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {FriendsType} from "../../Redux/store";

type NavbarType = {
    sidebar: FriendsType[]
}
const Navbar = (props: NavbarType) => {
    return (
        <nav className={s.navbar}>
            <ul className={s.navbar_link}>
                <li>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
                </li>
                <li>
                    <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                </li>
                <li>
                    <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                </li>
                <li>
                    <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                </li>

                {/*<SideBar sidebar={props.sidebar}/>*/}
            </ul>
        </nav>
    );
}

export default Navbar;