import React from 'react';
import s from './Profile.module.css'
import '../../App.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../Redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type ProfileType = {
    store: StoreType
}
const Profile = (props: ProfileType) => {
    return (
        <main>
            <div className={s.profile_info}>
                <ProfileInfo/>
            </div>
            <div className={s.my_posts}>
                <MyPostsContainer
                    store={props.store}
                />
            </div>

        </main>
    );
}

export default Profile;