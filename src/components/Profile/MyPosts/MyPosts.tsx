import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


function MyPosts() {
    return (
        <div className={s.myPosts}>

            <div className={s.newPost}>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div className={s.posts}>
                <Post message={"Hi bibi"} like={1}/>
                <Post message={"Jjjfff "} like={5}/>
                <Post message={"Oooo bibi"} like={10}/>
            </div>

        </div>

    );
}

export default MyPosts;