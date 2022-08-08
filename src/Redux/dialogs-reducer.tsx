import React from 'react';
import {ActionsTypes, AddNewMessageActionType, ChangeNewMessageTextActionType, MessagesDataType} from "./store";


let initialState = {
    dialogs: [
        {id: 1, name: 'Slava'},
        {id: 2, name: 'Natasha'},
        {id: 3, name: 'Oleg'},
        {id: 4, name: 'Luba'},
        {id: 5, name: 'Alex'}
    ],

    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What is a problem?'},
        {id: 3, message: 'oh, no men'},
        {id: 4, message: 'ooops'},
        {id: 5, message: 'Sorry hat cat dog free dollars ahaha'}
    ],

    newMessageText: ''
}

export const dialogsReducer = (state: any = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-NEW-MESSAGE":
            const newMessage: MessagesDataType = {
                id: new Date().getTime(),
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state;

        case "CHANGE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newMessage
            return state;

        default:
            return state
    }
};

export const addNewMessageAC = (text: string): AddNewMessageActionType => {
    return {
        type: "ADD-NEW-MESSAGE",
        newMessageText: text
    }
}

export const changeNewMessageTextAC = (newMessage: string): ChangeNewMessageTextActionType => {
    return {
        type: "CHANGE-NEW-MESSAGE-TEXT",
        newMessage: newMessage
    }
}