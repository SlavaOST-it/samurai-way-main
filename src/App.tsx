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
import {StateType} from "./Redux/State";
import SideBar from "./components/Navbar/SideBar";

type AppType = {
    state: StateType
}

const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Navbar sidebar={props.state.sidebar.friends}/>
                <div className="wrapper-navbar">
                    <Route path='/profile' render={() => <Profile postsData={props.state.profilePage.posts}/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs dialogsData={props.state.messagesPage.dialogs} messagesData={props.state.messagesPage.messages}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='sidebar' render={()=> <SideBar sidebar={props.state.sidebar.friends}/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}


export default App;
