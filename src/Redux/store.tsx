import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";


export type AddPostActionType = {
    type: "ADD-POST",
    newPostText: string
}

export type ChangeNewTextPostActionType = {
    type: "CHANGE-NEW-TEXT-POST",
    newText: string
}

export type AddNewMessageActionType = {
    type: "ADD-NEW-MESSAGE",
    newMessageText: string
}

export type ChangeNewMessageTextActionType = {
    type: "CHANGE-NEW-MESSAGE-TEXT",
    newMessage: string
}

export type ActionsTypes =
    AddPostActionType
    | ChangeNewTextPostActionType
    | AddNewMessageActionType
    | ChangeNewMessageTextActionType


export type PostsDataType = {
    id: number,
    message: string,
    likesCount: number
}

export type DialogsDataType = {
    id: number,
    name: string
}

export type MessagesDataType = {
    id: number,
    message: string
}

export type FriendsType = {
    id: number,
    name: string
}

export type ProfilePageType = {
    posts: PostsDataType[]
    newPostText: string
}

export type MessagesPageType = {
    dialogs: DialogsDataType[],
    messages: MessagesDataType[]
    newMessageText: string
}

export type SidebarType = {
    friends: FriendsType[]
}

export type StateType = {
    profilePage: ProfilePageType,
    messagesPage: MessagesPageType,
    sidebar: SidebarType
}

export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
    // addPost: () => void
    // changeNewTextPost: (newText: string) => void
    // addNewMessage: () => void
    // changeNewMessageText: (newMessage: string) => void


}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Do you like me', likesCount: 1},
                {id: 2, message: 'What it is?', likesCount: 5},
                {id: 3, message: 'oh, no men', likesCount: 2},
                {id: 4, message: 'Oooo ha ha ha lol', likesCount: 10},
                {id: 5, message: 'Oooo ha ha ha lol', likesCount: 10}
            ],
            newPostText: ''
        },

        messagesPage: {
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
        },

        sidebar: {
            friends: [
                {id: 2, name: 'Natasha'},
                {id: 3, name: 'Oleg'},
            ]
        }
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    getState() {
        return this._state
    },

    _callSubscriber() {
    },

    // addPost() {
    //     const newPost: PostsDataType = {
    //         id: new Date().getTime(),
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber()
    // },
    //
    // changeNewTextPost(newText: string) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber()
    // },
    //
    // addNewMessage() {
    //     const newMessage: MessagesDataType = {
    //         id: new Date().getTime(),
    //         message: this._state.messagesPage.newMessageText
    //     }
    //     this._state.messagesPage.messages.push(newMessage)
    //     this._state.messagesPage.newMessageText = ''
    //     this._callSubscriber()
    // },
    //
    // changeNewMessageText(newMessage: string) {
    //     this._state.messagesPage.newMessageText = newMessage
    //     this._callSubscriber()
    // },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);

        this._callSubscriber(this._state)
    }
};
