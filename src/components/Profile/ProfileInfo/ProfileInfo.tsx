import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={s.profile_user}>
            <div className={s.photo_user}>
                <img src="https://pbs.twimg.com/profile_images/977700491051323394/OiI5vDqo.jpg" alt="photo_info"/>
            </div>
                <div className={s.user_info}>
                    Name
                    Address

                </div>



        </div>

    )

}

export default ProfileInfo