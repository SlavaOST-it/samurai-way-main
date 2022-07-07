import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//========================================//
export type DialogsDataType = {
    id: number,
    name: string
}
let dialogsData: Array<DialogsDataType> = [
    {id: 1, name: 'Slava'},
    {id: 2, name: 'Natasha'},
    {id: 3, name: 'Oleg'},
    {id: 4, name: 'Luba'},
    {id: 5, name: 'Alex'},
]

//========================================//
export type MessagesDataType = {
    id: number,
    message: string
}
let messagesData: MessagesDataType[] = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'What is a problem?'},
    {id: 3, message: 'oh, no men'},
    {id: 4, message: 'ooops'},
    {id: 5, message: 'Sorry'},
]

//========================================//
export type PostsDataType = {
    id: number,
    message: string,
    likesCount: number
}
let postsData: PostsDataType[] = [
    {id: 1, message: 'Do you like me', likesCount: 1},
    {id: 2, message: 'What it is?', likesCount: 5},
    {id: 3, message: 'oh, no men', likesCount: 2},
    {id: 4, message: 'Oooo ha ha ha lol', likesCount: 10},
    {id: 5, message: 'Oooo ha ha ha lol', likesCount: 10},
]

// export type AppPropsType = {
//     dialogsData: Array<DialogsDataType>,
//     messagesData: Array<MessagesDataType>,
//     postsData: Array<PostsDataType>
// }


ReactDOM.render(<App
        dialogsData={dialogsData}
        messagesData={messagesData}
        postsData={postsData}
    />,
    document.getElementById('root')
);





