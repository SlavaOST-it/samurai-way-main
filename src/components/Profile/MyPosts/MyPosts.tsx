import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostsDataType} from "../../../Redux/State";


type MyPostsType = {
    postsData: PostsDataType[],
    addPostCallBack: (postMessage: string) => void
    newPostText: string
    changeNewTextPostCallback: (newPostText: string) => void
}
const MyPosts = (props: MyPostsType) => {
    let messagesPost = props.postsData.map(m => {
        return <Post message={m.message} like={m.likesCount}/>
    })

    const addPostHandler = () => {
        props.addPostCallBack(props.newPostText)
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextPostCallback(e.currentTarget.value)
    }
    return (
        <div className={s.myPosts}>
            <h3>
                My posts
            </h3>
            <div className={s.newPost}>
                <textarea value={props.newPostText} onChange={onPostChange}/>
                <button onClick={addPostHandler}>Add post</button>
            </div>

            <div className={s.posts}>
                {messagesPost}
            </div>
        </div>
    );
}

export default MyPosts;