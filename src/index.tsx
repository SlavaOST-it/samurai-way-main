import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import './index.css';
import {store, StoreType} from "./Redux/state";


export const rerenderEntireTree= (store: StoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
            />,
        </BrowserRouter>,
        document.getElementById('root'));
}


rerenderEntireTree(store);
store.subscribe(() => rerenderEntireTree(store))


