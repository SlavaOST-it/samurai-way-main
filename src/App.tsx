import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import SideBar from "./components/Navbar/SideBar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <HeaderContainer/>
                <Navbar/>

                <div className="wrapper-navbar">
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>

                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>

                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>

                    <Route path={'/users'}
                           render={() => <UsersContainer/>}/>

                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='sidebar'
                           render={() => <SideBar/>}/>

                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}


export default App;
