import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import '../../App.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
    return (
        <main>
            {/*<div className={s.content_bg}>
                <img
                    src="https://www.illumio.com/sites/default/files/2020-09/Cloud100-graphic-subdued_3200.jpg"
                    alt="bg"/>
            </div>*/}
            <div className={s.profile_info}>
                <ProfileInfo/>
            </div>
            <div className={s.my_posts}>
                <MyPosts/>
            </div>

        </main>
    );
}

export default Profile;