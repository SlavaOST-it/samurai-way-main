import React, {ChangeEvent} from 'react';
import Dialogs from "./Dialogs/Dialogs";
import {addNewMessageAC, changeNewMessageTextAC, InitialStateType} from "../Redux/dialogs-reducer";
import {connect} from "react-redux";
import {StateType} from "../Redux/store";
import {AppStateType} from "../Redux/redux-store";
import {Dispatch} from "redux";


// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     const state = store.getState().messagesPage
//
//                     // коллбэк функция которая вызвывает функцию из стейта для добавления сообщения
//                     const addNewMessage = () => {
//                         store.dispatch(addNewMessageAC(state.newMessageText))
//                     }
//
//                     // коллбэк функция которая вызвывает функцию из стейта для изменения текста нового сообщения
//                     const onChangeNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
//                         store.dispatch(changeNewMessageTextAC(e.currentTarget.value))
//                     }
//                     return (
//                         <Dialogs dialogsData={state.dialogs}
//                                  messagesData={state.messages}
//                                  newMessageText={state.newMessageText}
//                                  addNewMessage={addNewMessage}
//                                  onChangeNewMessageText={onChangeNewMessageText}/>
//                     )
//
//                 }
//             }
//
//         </StoreContext.Consumer>
//
//     )
// }

type MapStatePropsType = {
    dialogsPage: InitialStateType
}
type MapDispatchPropsType = {
    addNewMessage: (text: string) => void,
    onChangeNewMessageText: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.messagesPage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addNewMessage: (newMessageText:string) => {
            dispatch(addNewMessageAC(newMessageText));
        },
        onChangeNewMessageText: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(changeNewMessageTextAC(e.currentTarget.value))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer