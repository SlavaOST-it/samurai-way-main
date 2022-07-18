import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import State from "./Redux/State";
import {addPost} from "./Redux/State";


ReactDOM.render(<App
        state={State}
        addPost={addPost}
    />,
    document.getElementById('root')
);





