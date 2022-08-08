import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsDataType, MessagesDataType} from "../../Redux/store";
import logoSend from "../img/logo/icons-message-email-send.png";



type DialogsPropsType = {
    dialogsData: DialogsDataType[],
    messagesData: MessagesDataType[]
    newMessageText: string
    addNewMessage: ()=>void
    onChangeNewMessageText: (e: ChangeEvent<HTMLTextAreaElement>) => void
  }


const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsData.map((d) => {
        return <DialogItem name={d.name} id={d.id}/>
    })

    let messagesElements = props.messagesData.map(m => {
        return <Message key={m.id} message={m.message}/>
    })

    // коллбэк функция которая вызвывает функцию из стейта для добавления сообщения
    const addNewMessage = () => {
        props.addNewMessage()
    }

    // коллбэк функция которая вызвывает функцию из стейта для изменения нового сообщения
    const onChangeNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeNewMessageText(e)
    }

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogs_items}>
                {dialogsElements}
            </ul>

            <div className={s.messages}>
                {messagesElements}
                <textarea
                    className={s.textArea}
                    value={props.newMessageText}
                    onChange={onChangeNewMessageText}>

                </textarea>
                <button onClick={addNewMessage}><img className={s.logo_send} src={logoSend} alt={'send'}/></button>
            </div>
        </div>
    )
}

export default Dialogs