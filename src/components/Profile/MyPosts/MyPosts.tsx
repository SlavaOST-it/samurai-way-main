import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostsDataType} from "../../../Redux/State";


type MyPostsType = {
    postsData: PostsDataType[],
    addPost: (postMessage: string) => void
}
const MyPosts = (props: MyPostsType) => {
    let messagesPost = props.postsData.map(m => {
        return <Post message={m.message} like={m.likesCount}/>
    })

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        if (newPostElement.current)
        props.addPost(newPostElement.current.value)
        // newPostElement.current.value = '';
    }

    return (
        <div className={s.myPosts}>
            <h3>
                My posts
            </h3>
            <div className={s.newPost}>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPostHandler}>Add post</button>
            </div>

            <div className={s.posts}>
                {messagesPost}
            </div>

        </div>

    );
}

export default MyPosts;