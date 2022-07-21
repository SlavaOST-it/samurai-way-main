import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import '../../App.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {changeNewTextPost, PostsDataType, ProfilePageType} from "../../Redux/State";


type ProfileType = {
    postsData: PostsDataType[],
    profilePage: ProfilePageType
    addPostCallBack: (postMessage: string) => void
    newPostText: string
    changeNewTextPost: (newText: string)=>void

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
                    addPostCallBack={props.addPostCallBack}
                    newPostText={props.profilePage.newPostText}
                    changeNewTextPostCallback={changeNewTextPost}
                />
            </div>

        </main>
    );
}

export default Profile;