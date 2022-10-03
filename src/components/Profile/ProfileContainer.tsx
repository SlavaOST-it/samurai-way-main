import React from 'react';
import '../../App.css';
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {getProfileThunkCreator, UserProfileType} from "../../Redux/profile-reducer";
import {Profile} from "./Profile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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
            userId = 25342
        }
        this.props.getProfile(userId)

    }
    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
            />
        );
    }
}

type MapStatePropsType = {
    profile: UserProfileType[] | null
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile: getProfileThunkCreator}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)