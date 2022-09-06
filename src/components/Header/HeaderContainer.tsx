import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {setAuthUserDataAC} from "../../Redux/auth-reducer";

export type HeaderContainerType = MapStatePropsType & MapDispatchPropsType

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "dd070108-da2d-47ec-bd5a-e22f291be6bf"
    }
});

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })

    }


    render() {
        return (
            <Header {...this.props}
                    isAuth={this.props.isAuth}
                    login={this.props.login}
            />
        );
    }
}


type MapStatePropsType = {
    isAuth: boolean,
    login: string | null
}
type MapDispatchPropsType = {
    setAuthUserData: (userId: number | null, email: number | null, login: number | null) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        setAuthUserData: (userId: number | null, email: number | null, login: number | null) => {
            dispatch(setAuthUserDataAC(userId, email, login))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)