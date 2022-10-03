import React from 'react';
import '../../App.css';
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    getProfileThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator,
    UserProfileType
} from "../../Redux/profile-reducer";
import {Profile} from "./Profile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type ProfileContainerType = {
    profile: UserProfileType[] | null,
    status: any,
    setUserProfile: (profile: UserProfileType[]) => void,
    getProfile: (userId: number) => void,
    getStatus: (userId: number) => void,
    updateStatus: (status: string) => void,
    isAuth: boolean
}


class ProfileContainer extends React.Component<any, ProfileContainerType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 25342
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)

    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        );
    }
}

type MapStatePropsType = {
    profile: UserProfileType[] | null,
    status: any
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            getProfile: getProfileThunkCreator,
            getStatus: getStatusThunkCreator,
            updateStatus: updateStatusThunkCreator
        },
    ),
    withRouter,
    withAuthRedirect
)(ProfileContainer)