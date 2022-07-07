import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {DialogsDataType, MessagesDataType, PostsDataType} from "./index";

type AppType = {
    dialogsData: Array<DialogsDataType>,
    messagesData: Array<MessagesDataType>,
    postsData: Array<PostsDataType>
}
const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Navbar/>
                <div className="wrapper-navbar">
                    <Route path='/profile' render={() => <Profile postsData={props.postsData}/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}


export default App;
