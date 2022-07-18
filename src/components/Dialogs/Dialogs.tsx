import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsDataType, MessagesDataType} from "../../Redux/State";
import logoSend from "../img/logo/icons-message-email-send.png";


type DialogsPropsType ={
    dialogsData: DialogsDataType[],
    messagesData: MessagesDataType[]
}


const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsData.map((d) => {
        return <DialogItem name={d.name} id={d.id}/>
    })

    let messagesElements = props.messagesData.map(m => {
        return <Message message={m.message}/>
    })

    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const addNewMessage = () => {
        alert(newMessageElement.current?.value)
    }

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogs_items}>
                {dialogsElements}
            </ul>

            <div className={s.messages}>
                {messagesElements}
                <textarea className={s.textArea} ref={newMessageElement}></textarea>
                <button onClick={addNewMessage}><img className={s.logo_send} src={logoSend} alt={'send'}/></button>
            </div>
        </div>
    )
}

export default Dialogs