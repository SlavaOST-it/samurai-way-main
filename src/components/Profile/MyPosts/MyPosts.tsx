import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostsDataType} from "../../../Redux/profile-reducer";
import {AddNewPostForm} from "./AddNewPostForm";

type MyPostsType = {
    posts: PostsDataType[],
    addPost: (newPostText: string) => void
}

export const MyPosts = React.memo((props: MyPostsType) => {
    let messagesPost = props.posts.map(m => {
        return <Post key={m.id} message={m.message} like={m.likesCount}/>
    })

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div className={s.newPost}>
                <AddNewPostForm/>
            </div>
            <div className={s.posts}>
                {messagesPost}
            </div>
        </div>
    );
})