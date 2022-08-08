import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {ActionsTypes, StateType, StoreType} from "./Redux/store";
import SideBar from "./components/Navbar/SideBar";

type AppType = {
    store: StoreType
    state: StateType
    dispatch: (action:ActionsTypes) => void
}

const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Navbar sidebar={props.state.sidebar.friends}/>
                <div className="wrapper-navbar">

                    <Route path='/profile' render={() =>
                        <Profile
                            store={props.store}
                            // profilePage={props.state.profilePage}
                            // postsData={props.state.profilePage.posts}
                            //
                            // newPostText={props.state.profilePage.newPostText}
                            // dispatch={props.dispatch}
                        />}
                    />

                    <Route path='/dialogs'
                           render={() =>
                               <Dialogs
                                   store={props.store}
                                   dialogsData={props.state.messagesPage.dialogs}
                                   messagesData={props.state.messagesPage.messages}

                                   newMessageText={props.state.messagesPage.newMessageText}
                                   dispatch={props.dispatch}
                               />}/>

                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='sidebar' render={() =>
                        <SideBar sidebar={props.state.sidebar.friends}/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}


export default App;
