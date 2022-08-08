import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostsDataType} from "../../../Redux/store";



type MyPostsType = {
    postsData: PostsDataType[],
    newPostText: string
    // dispatch: (action: ActionsTypes) => void
    addPost: ()=>void
    updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>)=> void
}



const MyPosts = (props: MyPostsType) => {
    let messagesPost = props.postsData.map(m => {
        return <Post message={m.message} like={m.likesCount}/>
    })

    const onAddPostHandler = () => {
        props.addPost()
        //props.dispatch(addPostAC(props.newPostText))
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

       // props.dispatch(changeNewTextPostAC(e.currentTarget.value))
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