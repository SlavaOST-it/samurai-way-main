import React, {ChangeEvent} from 'react';
import Dialogs from "./Dialogs/Dialogs";
import {StoreType} from "../Redux/store";
import {addNewMessageAC, changeNewMessageTextAC} from "../Redux/dialogs-reducer";


type DialogsContainerPropsType = {
    store: StoreType
}

const DialogsContainer = (props: DialogsContainerPropsType) => {
const state = props.store.getState().messagesPage

    // коллбэк функция которая вызвывает функцию из стейта для добавления сообщения
    const addNewMessage = () => {
        props.store.dispatch(addNewMessageAC(state.newMessageText))
    }

    // коллбэк функция которая вызвывает функцию из стейта для изменения текста нового сообщения
    const onChangeNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(changeNewMessageTextAC(e.currentTarget.value))
    }

    return (
       <Dialogs dialogsData={state.dialogs}
                messagesData={state.messages}
                newMessageText={state.newMessageText}
                addNewMessage={addNewMessage}
                onChangeNewMessageText={onChangeNewMessageText}/>
    )
}

export default DialogsContainer