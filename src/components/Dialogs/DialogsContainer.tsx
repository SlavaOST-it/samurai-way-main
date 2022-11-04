import React from 'react';
import Dialogs from "./Dialogs";
import {addNewMessageAC, MessagesPageType} from "../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


export type DialogsContainerType = {
    dialogsPage: MessagesPageType
    addNewMessage: (text: string) => void
}

class DialogsContainer extends React.Component<any, DialogsContainerType> {

    render() {
        return (
            <Dialogs
                dialogsPage={this.props.dialogsPage}
                addNewMessage={this.props.addNewMessage}
            />
        )
    }
}

type MapStatePropsType = {
    dialogsPage: MessagesPageType
}
type MapDispatchPropsType = {
    addNewMessage: (text: string) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addNewMessage: (newMessageText: string) => {
            dispatch(addNewMessageAC(newMessageText));
        }
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(DialogsContainer)
