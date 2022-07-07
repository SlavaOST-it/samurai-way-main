import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemType = {
    name: string
    id: number
}


const DialogItem = (props: DialogItemType) => {
    return (
        <li className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </li>
    )
}




export default DialogItem