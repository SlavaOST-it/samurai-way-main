import React from 'react';
import '../../App.css';
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {getProfileThunkCreator, UserProfileType} from "../../Redux/profile-reducer";
import {Profile} from "./Profile";
import {withRouter} from "react-router-dom";


type ProfileContainerType = {
    profile: UserProfileType[] | null,
    setUserProfile: (profile: UserProfileType[]) => void,
    getProfile: (userId: number) =>void
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


let WithUrlDataContainerComponent = withRouter<any, any>(ProfileContainer)   // !!!!!!!!!! ANY

export default connect(mapStateToProps, {getProfile: getProfileThunkCreator})(WithUrlDataContainerComponent);