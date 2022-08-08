import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import './index.css';
import {store} from "./Redux/redux-store";
import {StoreType} from "./Redux/store";


export const rerenderEntireTree= (store: StoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                store={store}
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
            />,
        </BrowserRouter>,
        document.getElementById('root'));
}


rerenderEntireTree(store);
store.subscribe(() => rerenderEntireTree(store))


