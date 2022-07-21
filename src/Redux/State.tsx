let rerenderEntireTree = ()=>{

}

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

let State: StateType = {
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
}
// Добавление постов на стену
export const addPost = () => {
    const newPost: PostsDataType = {
        id: new Date().getTime(),
        message: State.profilePage.newPostText,
        likesCount: 0
    }
    State.profilePage.posts.push(newPost)
    State.profilePage.newPostText = ''
    rerenderEntireTree()
}
// Изменение текста в новом посте
export const changeNewTextPost = (newText: string) => {
    State.profilePage.newPostText = newText;
    rerenderEntireTree()
}

// Добавление сообщения в messagesPage
export const addNewMessage = () => {
    const newMessage: MessagesDataType = {
        id: new Date().getTime(),
        message: State.messagesPage.newMessageText
    }
    State.messagesPage.messages.push(newMessage)
    State.messagesPage.newMessageText = ''
    rerenderEntireTree()
}

// Изменение текста в новом сообщении
export const changeNewMessageText = (newMessage: string)=>{
    State.messagesPage.newMessageText = newMessage
    rerenderEntireTree()
}


export const subscribe = (observer: ()=> void) =>{
    rerenderEntireTree = observer
}
export default State