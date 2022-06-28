import React from 'react';
import s from "./Post.module.css";

type PostType = {
    message: string,
    like: number
}

const Post= (props:PostType) =>{
    return (
        <div className={s.item}>
            <img src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg" alt="logo_user"/>
            <div className={s.text}>
                {props.message}
                <div>
                    <span>{props.like} like</span>
                </div>
            </div>
        </div>


    );
}

export default Post;