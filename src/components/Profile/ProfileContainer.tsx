import React from 'react';
import '../../App.css';
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {getProfileThunkCreator, UserProfileType} from "../../Redux/profile-reducer";
import {Profile} from "./Profile";
import {Redirect, withRouter} from "react-router-dom";


type ProfileContainerType = {
    profile: UserProfileType[] | null,
    setUserProfile: (profile: UserProfileType[]) => void,
    getProfile: (userId: number) => void,
    isAuth: boolean
}


class ProfileContainer extends React.Component<any, ProfileContainerType> {


    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getProfile(userId)

    }

    render() {
        //проверка на логинизацию
        if (!this.props.isAuth) return <Redirect to={"/login"}/>


        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
            />
        );
    }
}

type MapStatePropsType = {
    profile: UserProfileType[] | null,
    isAuth: boolean
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}


let WithUrlDataContainerComponent = withRouter<any, any>(ProfileContainer)   // !!!!!!!!!! ANY

export default connect(mapStateToProps, {getProfile: getProfileThunkCreator})(WithUrlDataContainerComponent);