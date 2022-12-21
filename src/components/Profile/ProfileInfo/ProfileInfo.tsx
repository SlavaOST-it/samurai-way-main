import React from 'react';
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {UserProfileType} from "../../../Redux/profile-reducer";
import {UserPhoto} from "../../common/userPhoto/UserPhoto";

type ProfileInfoType = {
    profile: UserProfileType
    status: string,
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (e: string)=>void
}

const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const changeUserAvatar = (e: any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={s.profile_user}>
            <div className={s.photo_user}>
                <UserPhoto profile={props.profile}/>
                {props.isOwner && <input type={"file"} onChange={changeUserAvatar}/>}
                {/*<img src={userPhoto} alt="photo_info"/>*/}
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