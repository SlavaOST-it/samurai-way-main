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

export type FriendsType ={
    id: number,
    name: string
}

export type ProfilePageType = {
    posts: PostsDataType[]
}

export type MessagesPageType = {
    dialogs: DialogsDataType[],
    messages: MessagesDataType[]
}
export type SidebarType ={
    friends: FriendsType[]
}
export type StateType = {
    profilePage: ProfilePageType,
    messagesPage: MessagesPageType,
    sidebar: SidebarType
}

let State: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Do you like me', likesCount: 1},
            {id: 2, message: 'What it is?', likesCount: 5},
            {id: 3, message: 'oh, no men', likesCount: 2},
            {id: 4, message: 'Oooo ha ha ha lol', likesCount: 10},
            {id: 5, message: 'Oooo ha ha ha lol', likesCount: 10}
        ]
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
        ]
    },

    sidebar: {
        friends: [
            {id: 2, name: 'Natasha'},
            {id: 3, name: 'Oleg'},
        ]
    }
}

export default State