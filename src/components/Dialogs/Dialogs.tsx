import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsDataType, MessagesDataType} from "../../index";





type DialogsPropsType ={
    dialogsData: Array<DialogsDataType>,
    messagesData: Array<MessagesDataType>
}


const Dialogs = (props: DialogsPropsType) => {

   /* let dialogsData = [
        {id: 1, name: 'Slava'},
        {id: 2, name: 'Natasha'},
        {id: 3, name: 'Oleg'},
        {id: 4, name: 'Luba'},
        {id: 5, name: 'Alex'},
    ]*/

    let dialogsElements = props.dialogsData.map((d) => {
        return <DialogItem name={d.name} id={d.id}/>
    })

    /*let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What is a problem?'},
        {id: 3, message: 'oh, no men'},
        {id: 4, message: 'ooops'},
        {id: 5, message: 'Sorry'},
    ]*/

    let messagesElements = props.messagesData.map(m => {
        return <Message message={m.message}/>
    })

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogs_items}>
                {dialogsElements}
            </ul>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs