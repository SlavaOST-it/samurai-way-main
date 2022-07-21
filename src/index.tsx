import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import './index.css';
import State, {subscribe} from "./Redux/State";
import {addNewMessage, addPost, changeNewMessageText, changeNewTextPost} from "./Redux/State";



export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={State}
                addPost={addPost}
                changeNewTextPost={changeNewTextPost}

                addNewMessage={addNewMessage}
                changeNewMessageText={changeNewMessageText}
            />,
        </BrowserRouter>,
        document.getElementById('root'));
}
rerenderEntireTree()
subscribe(rerenderEntireTree)

