
export type DialogsType = {
    id: number,
    name: string
}
export type MessagesType = {
    id: number,
    message: string
}
export type MessagesPageType = {
    dialogs: DialogsType[],
    messages: MessagesType[]

}
let initialState: MessagesPageType = {
    dialogs: [
        {id: 1, name: 'Slava'},
        {id: 2, name: 'Natasha'},
        {id: 3, name: 'Oleg'},
        {id: 4, name: 'Luba'},
        {id: 5, name: 'Alex'}
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What is a problem?'},
        {id: 3, message: 'oh, no men'},
        {id: 4, message: 'ooops'},
        {id: 5, message: 'Sorry hat cat dog free dollars ahaha'}
    ] as Array<MessagesType>,

}
export type AddNewMessageAT = {
    type: "ADD-NEW-MESSAGE",
    newMessageText: string
}

export type ActionsTypes = AddNewMessageAT

export const dialogsReducer = (state: MessagesPageType = initialState, action: ActionsTypes): MessagesPageType => {
    switch (action.type) {
        case "ADD-NEW-MESSAGE": {
            const newMessage: MessagesType = {
                id: new Date().getTime(),
                message: action.newMessageText.trim()
            }
            return ({
                    ...state,
                   messages: [...state.messages, newMessage]
                }
            )
        }

        default:
            return state
    }
};

export const addNewMessageAC = (text: string): AddNewMessageAT => {
    return {
        type: "ADD-NEW-MESSAGE",
        newMessageText: text
    }
}