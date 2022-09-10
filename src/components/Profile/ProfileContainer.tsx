import React from 'react';
import '../../App.css';
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {setUserProfileAC, UserProfileType} from "../../Redux/profile-reducer";
import {Profile} from "./Profile";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";


// type ProfileContainerType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<any> {


    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        profileAPI.getProfile(userId)
            .then((data) => {
                this.props.setUserProfile(data);
            })
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
type MapDispatchPropsType = {
    setUserProfile: (profile: UserProfileType[]) => void,
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        setUserProfile: (profile: UserProfileType[]) => {
            dispatch(setUserProfileAC(profile))
        }
    }
}

let WithUrlDataContainerComponent = withRouter<any, any>(ProfileContainer)   // !!!!!!!!!! ANY

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);