import React from 'react';
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {UserProfileType} from "../../../Redux/profile-reducer";

type ProfileInfoType = {
    profile: UserProfileType
    status: string,
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoType) => {
    if(!props.profile){
        return <Preloader/>
    }
const userPhoto = props.profile.photos.large
    ? props.profile.photos.large
    : "https://pbs.twimg.com/profile_images/977700491051323394/OiI5vDqo.jpg"

    return (
        <div className={s.profile_user}>
            <div className={s.photo_user}>
                <img src={userPhoto} alt="photo_info"/>
            </div>
                <div className={s.user_info}>
                    <div className={s.name}>{props.profile.fullName}</div>
                    <div className={s.status}>{props.profile.aboutMe}</div>
                    <ProfileStatus
                        status={props.status}
                        updateStatus={props.updateStatus}
                    />
                </div>
        </div>

    )

}

export default ProfileInfo