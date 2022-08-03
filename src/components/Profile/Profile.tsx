import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import '../../App.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostsDataType, ProfilePageType} from "../../Redux/state";


type ProfileType = {
    postsData: PostsDataType[],
    profilePage: ProfilePageType
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}
const Profile = (props: ProfileType) => {
    return (
        <main>
            <div className={s.profile_info}>
                <ProfileInfo/>
            </div>
            <div className={s.my_posts}>
                <MyPosts
                    postsData={props.profilePage.posts}
                    newPostText={props.profilePage.newPostText}
                    dispatch={props.dispatch}
                />
            </div>

        </main>
    );
}

export default Profile;