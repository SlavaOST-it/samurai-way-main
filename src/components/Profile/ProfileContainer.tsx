import React from 'react';
import '../../App.css';
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/store";
import {
    getProfileThunkCreator,
    getStatusThunkCreator, updatePhotoUserThunkCreator,
    updateStatusThunkCreator,
    UserProfileType
} from "../../Redux/profile-reducer";
import {Profile} from "./Profile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type ProfileContainerType = {
    profile: UserProfileType[] | null,
    status: string,
    setUserProfile: (profile: UserProfileType[]) => void,
    getProfile: (userId: number) => void,
    getStatus: (userId: number) => void,
    updateStatus: (status: string) => void,
    isAuth: boolean,
    authorizedUserId: number
    savePhoto: (photo: string) => void
}

class ProfileContainer extends React.Component<any, ProfileContainerType> {
    refreshProfile (){
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 25342                                                     //=== HARD CODE !!!!!! ===//
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerType>, prevState: Readonly<ProfileContainerType>, snapshot?: any) {
        if(this.props.match.params.userId != this.props.match.params.userId){
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile
                {...this.props}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto}
            />
        );
    }
}

type MapStatePropsType = {
    profile: UserProfileType[] | null,
    status: string,
    authorizedUserId: number | null
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            getProfile: getProfileThunkCreator,
            getStatus: getStatusThunkCreator,
            updateStatus: updateStatusThunkCreator,
            savePhoto: updatePhotoUserThunkCreator,
        },
    ),
    withRouter,
    withAuthRedirect
)(ProfileContainer)