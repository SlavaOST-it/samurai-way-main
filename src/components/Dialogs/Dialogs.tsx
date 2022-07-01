import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <ul className={s.dialogs_items}>
                <li className={s.dialog}>
                    <NavLink to='/dialogs/1' activeClassName={s.active}>Slava</NavLink>
                </li>
                <li className={s.dialog}>
                    <NavLink to='/dialogs/2' activeClassName={s.active}>Natasha</NavLink>
                </li>
                <li className={s.dialog}>
                    <NavLink to='/dialogs/3' activeClassName={s.active}>Oleg</NavLink>
                </li>
                <li className={s.dialog}>
                    <NavLink to='/dialogs/4' activeClassName={s.active}>Luba</NavLink>
                </li>
                <li className={s.dialog}>
                    <NavLink to='/dialogs/5' activeClassName={s.active}>Alex</NavLink>
                </li>
            </ul>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>What is a problem?</div>
                <div className={s.message}>oh, no men</div>
            </div>
        </div>
    )
}

export default Dialogs