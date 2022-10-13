import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {MessagesPageType} from "../../Redux/dialogs-reducer";
import {AddMessageForm} from "./Message/AddMessageForm";


type DialogsPropsType = {
    dialogsPage: MessagesPageType
    addNewMessage: (newMessageText: string) => void
}


const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => {
        return <DialogItem key={d.id} name={d.name} id={d.id}/>
    })

    let messagesElements = props.dialogsPage.messages.map(m => {
        return <Message key={m.id} message={m.message}/>
    })

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogs_items}>
                {dialogsElements}
            </ul>

            <div className={s.messages}>
                {messagesElements}
                <AddMessageForm/>
            </div>
        </div>
    )
}


export default Dialogs