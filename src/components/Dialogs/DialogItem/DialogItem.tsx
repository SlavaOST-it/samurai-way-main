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
            <img className={s.dialog_img}
                 src={'https://skillbox.ru/upload/setka_images/22512420052021_e3039f248dd555899a396179b51a05be377f9973.png'}
                 alt={''}/>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </li>
    )
}


export default DialogItem