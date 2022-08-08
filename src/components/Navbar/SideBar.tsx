import React from "react";
import {StoreType} from "../../Redux/store";
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import s from "./Navbar.module.css";


type SideBarType = {
    store: StoreType
}

export const SideBar = (props: SideBarType) => {
    let state = props.store.getState().sidebar.friends

    let friendsItem = state.map((d) => {
        return <DialogItem name={d.name} id={d.id}/>
    })


    return (
        <div>
            <img className={s.friends_logo}
                 src={'https://skillbox.ru/upload/setka_images/22512420052021_e3039f248dd555899a396179b51a05be377f9973.png'}
                 alt={''}/>
            {friendsItem}
        </div>
    )
}

export default SideBar