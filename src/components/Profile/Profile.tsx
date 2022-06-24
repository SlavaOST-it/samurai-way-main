import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <main className={s.content}>
            <div className={s.content_logo}>
                <img
                    src="https://www.illumio.com/sites/default/files/2020-09/Cloud100-graphic-subdued_3200.jpg"
                    alt="bg"/>
            </div>
            <div className={s.content_photo_info}>
                <img src="https://pbs.twimg.com/profile_images/977700491051323394/OiI5vDqo.jpg" alt="photo_info"/>
                <div className={s.content_user_info}>
                    Name

                    Address
                </div>
            </div>
            <MyPosts/>
        </main>
    );
}

export default Profile;