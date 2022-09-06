import React from 'react';
import '../../App.css';
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {setUserProfileAC} from "../../Redux/profile-reducer";
import {Profile} from "./Profile";


type ProfileContainerType = {
    profile: any
    setUserProfile: (profile: any) => void,
}


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "dd070108-da2d-47ec-bd5a-e22f291be6bf"
    }
});


class ProfileContainer extends React.Component<ProfileContainerType, ProfileContainerType> {

    componentDidMount() {
        instance.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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
    profile: any
}
type MapDispatchPropsType = {
    setUserProfile: (profile: any) => void,
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        setUserProfile: (profile: any) => {
            dispatch(setUserProfileAC(profile))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);