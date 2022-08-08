import React, {ChangeEvent} from 'react';
import {StoreType} from "../../../Redux/store";
import {addPostAC, changeNewTextPostAC} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";


type MyPostsType = {
    store: StoreType
    // postsData: PostsDataType[],
    // newPostText: string
    // dispatch: (action: ActionsTypes) => void
}



const MyPostsContainer = (props: MyPostsType) => {
    let state = props.store.getState()

    const onClickAddPostHandler = () => {
        props.store.dispatch(addPostAC(state.profilePage.newPostText))
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(changeNewTextPostAC(e.currentTarget.value))
    }

    return (
        <MyPosts
            postsData={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
            addPost={onClickAddPostHandler}
            updateNewPostText={onPostChange}/>
    );
}

export default MyPostsContainer;