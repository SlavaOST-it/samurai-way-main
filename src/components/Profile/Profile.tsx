import React from 'react';
import s from './Profile.module.css'
import '../../App.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../Redux/profile-reducer";

export type ProfileType = {
    profile: UserProfileType,

}

export const Profile: React.FC<ProfileType> = (
    {
        profile,

    }) => {



    return (
        <main>
            <div className={s.profile_info}>
                <ProfileInfo profile={profile}/>
            </div>
            <div className={s.my_posts}>
                <MyPostsContainer

                />
            </div>

        </main>
    );
}
