import React from 'react';
import {addPostAC, PostsDataType} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../Redux/redux-store";


export type MapStateToPropsType = {
    posts:PostsDataType[]
}
export type mapDispatchToPropsType = {
    addPost: (newPostText: string)=>void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}
let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        addPost: (newPostTex: string)=>{
           dispatch(addPostAC(newPostTex))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;