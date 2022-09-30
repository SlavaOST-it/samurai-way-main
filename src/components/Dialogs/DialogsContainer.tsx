import React, {ChangeEvent} from 'react';
import Dialogs from "./Dialogs";
import {addNewMessageAC, changeNewMessageTextAC, MessagesPageType} from "../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStatePropsType = {
    dialogsPage: MessagesPageType
}
type MapDispatchPropsType = {
    addNewMessage: (text: string) => void,
    onChangeNewMessageText: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.messagesPage
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


export default withAuthRedirect (DialogsContainer)