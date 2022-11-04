import React, {useEffect} from 'react';
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
import {Login} from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./Redux/store";
import {initializeAppTC} from "./Redux/app-reducer";
import {Preloader} from "./components/common/preloader/Preloader";


const App = () => {
    const isInitialized = useSelector<AppStateType, boolean>(state => state.app.isInitialized)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    if(!isInitialized){
        return <Preloader/>
    }

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

                    <Route path='/login' render={() => <Login/>}/>


                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}


export default App;
