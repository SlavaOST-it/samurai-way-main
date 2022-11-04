import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/store";
import {getAuthThunkCreator, logoutThunkCreator} from "../../Redux/auth-reducer";
import {UserProfileType} from "../../Redux/profile-reducer";


export type HeaderContainerType = MapStatePropsType & {getAuth: ()=>void}

class HeaderContainer extends React.Component<any, HeaderContainerType> {
    render() {
        return (
            <Header {...this.props}
                    isAuth={this.props.isAuth}
                    logout={this.props.logout}
                    userPhoto={this.props.userPhoto}
            />
        );
    }
}

type MapStatePropsType = {
    isAuth: boolean,
    userPhoto: UserProfileType[] | null,
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        userPhoto: state.profilePage.profile,
    }
}
export default connect(mapStateToProps, {getAuth: getAuthThunkCreator, logout: logoutThunkCreator})(HeaderContainer)