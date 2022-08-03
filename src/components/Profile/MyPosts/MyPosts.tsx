import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ActionsTypes, addPostAC, changeNewTextPostAC, PostsDataType} from "../../../Redux/state";


type MyPostsType = {
    postsData: PostsDataType[],
    newPostText: string
    dispatch: (action: ActionsTypes) => void

    // addPostCallBack: (postMessage: string) => void
    // changeNewTextPostCallback: (newPostText: string) => void
}



const MyPosts = (props: MyPostsType) => {
    let messagesPost = props.postsData.map(m => {
        return <Post message={m.message} like={m.likesCount}/>
    })

    const onClickAddPostHandler = () => {
        props.dispatch(addPostAC(props.newPostText))
        // props.addPostCallBack(props.newPostText)
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewTextPostAC(e.currentTarget.value))
        // props.changeNewTextPostCallback(e.currentTarget.value)
    }
    return (
        <div className={s.myPosts}>
            <h3>
                My posts
            </h3>
            <div className={s.newPost}>
                <textarea value={props.newPostText} onChange={onPostChange}/>
                <button onClick={onClickAddPostHandler}>Add post</button>
            </div>

            <div className={s.posts}>
                {messagesPost}
            </div>
        </div>
    );
}

export default MyPosts;