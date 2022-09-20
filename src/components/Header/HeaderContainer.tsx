import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {getAuthThunkCreator, setAuthUserDataAC} from "../../Redux/auth-reducer";
import {UserProfileType} from "../../Redux/profile-reducer";


export type HeaderContainerType = MapStatePropsType & {getAuth: ()=>void}

class HeaderContainer extends React.Component<any, HeaderContainerType> {
    componentDidMount() {
        this.props.getAuth()
    }


    render() {
        return (
            <Header {...this.props}
                    isAuth={this.props.isAuth}
                    login={this.props.login}
                    userPhoto={this.props.userPhoto}
            />
        );
    }
}


type MapStatePropsType = {
    isAuth: boolean,
    login: string | null,
    userPhoto: UserProfileType[] | null
}
// type MapDispatchPropsType = {
//     setAuthUserData: (userId: number | null, email: number | null, login: number | null) => void
// }

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        userPhoto: state.profilePage.profile
    }
}
// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         setAuthUserData: (userId: number | null, email: number | null, login: number | null) => {
//             dispatch(setAuthUserDataAC(userId, email, login))
//         }
//     }
// }
export default connect(mapStateToProps, {getAuth: getAuthThunkCreator})(HeaderContainer)