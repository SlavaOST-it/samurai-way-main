import React from 'react';
import '../../App.css';
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {setUserProfileAC, UserProfileType} from "../../Redux/profile-reducer";
import {Profile} from "./Profile";
import {withRouter} from "react-router-dom";


type ProfileContainerType = MapStatePropsType & MapDispatchPropsType

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "dd070108-da2d-47ec-bd5a-e22f291be6bf"
    }
});


class ProfileContainer extends React.Component<any> {


    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = 2
        }
        instance.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then((response) => {
                this.props.setUserProfile(response.data);
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

let WithUrlDataContainerComponent = withRouter<any, any>(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);