import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import '../../App.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsDataType} from "../../index";

type ProfileType = {
    postsData: Array<PostsDataType>
}
const Profile = (props: ProfileType) => {
    return (
        <main>
            <div className={s.profile_info}>
                <ProfileInfo/>
            </div>
            <div className={s.my_posts}>
                <MyPosts postsData={props.postsData}/>
            </div>

        </main>
    );
}

export default Profile;