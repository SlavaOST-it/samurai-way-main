import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            <h3>
                My posts
            </h3>
            <div className={s.newPost}>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div className={s.posts}>
                <Post message={"Do you like me?"} like={1}/>
                <Post message={"What it is?"} like={5}/>
                <Post message={"Oooo ha ha ha lool"} like={10}/>
                <Post message={"Oooo ha ha ha lool"} like={10}/>
                <Post message={"Oooo ha ha ha lool"} like={10}/>
            </div>

        </div>

    );
}

export default MyPosts;