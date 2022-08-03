import React from 'react';
import {ActionsTypes, AddNewMessageActionType, ChangeNewMessageTextActionType, MessagesDataType} from "./state";

export const dialogsReducer = (state: any, action: ActionsTypes) => {
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