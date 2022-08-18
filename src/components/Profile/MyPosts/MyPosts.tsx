import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostsDataType} from "../../../Redux/profile-reducer";




type MyPostsType = {
    posts: PostsDataType[],
    newPostText: string
    addPost: (newPostText: string)=>void
    updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>)=> void
}


const MyPosts = (props: MyPostsType) => {
    let messagesPost = props.posts.map(m => {
        return <Post message={m.message} like={m.likesCount}/>
    })

    const onAddPostHandler = () => {
        props.addPost(props.newPostText)

    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e)
    }

    return (
        <div className={s.myPosts}>
            <h3>
                My posts
            </h3>
            <div className={s.newPost}>
                <textarea value={props.newPostText} onChange={onPostChange}/>
                <button onClick={onAddPostHandler}>Add post</button>
            </div>

            <div className={s.posts}>
                {messagesPost}
            </div>
        </div>
    );
}

export default MyPosts;