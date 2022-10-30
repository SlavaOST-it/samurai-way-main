import {UserProfileType} from "../../../Redux/profile-reducer";
import React from "react";

type UserPhotoType = {
    profile: UserProfileType
    className?: string
}

export const UserPhoto = (props: UserPhotoType) => {
    const userPhoto = props.profile.photos.large
        ? props.profile.photos.large
        : "https://pbs.twimg.com/profile_images/977700491051323394/OiI5vDqo.jpg"

    return (
        <img className={props.className} src={userPhoto} alt="photo_info"/>
    )
}