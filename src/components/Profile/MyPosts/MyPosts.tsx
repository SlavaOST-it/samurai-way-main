import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostsDataType} from "../../../index";

type MyPostsType = {
    postsData: Array<PostsDataType>
}
const MyPosts = (props: MyPostsType) => {

    let messagesPost = props.postsData.map(m => {
        return <Post message={m.message} like={m.likesCount}/>
    })

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
                {messagesPost}
            </div>

        </div>

    );
}

export default MyPosts;