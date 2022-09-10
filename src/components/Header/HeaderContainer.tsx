import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {setAuthUserDataAC} from "../../Redux/auth-reducer";
import {authAPI} from "../../api/api";

export type HeaderContainerType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        authAPI.getAuth()
            .then((data) => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
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