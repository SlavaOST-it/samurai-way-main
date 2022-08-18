import React, {ChangeEvent} from 'react';
import {addPostAC, changeNewTextPostAC, PostsDataType} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../Redux/redux-store";

// const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     const state = store.getState()
//
//                     const onClickAddPostHandler = () => {
//                         store.dispatch(addPostAC(state.profilePage.newPostText))
//                     }
//
//                     const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
//                         store.dispatch(changeNewTextPostAC(e.currentTarget.value))
//                     }
//
//                     return (
//                         <MyPosts
//                             postsData={state.profilePage.posts}
//                             newPostText={state.profilePage.newPostText}
//                             addPost={onClickAddPostHandler}
//                             updateNewPostText={onPostChange}/>
//                     )
//                 }
//             }
//
//
//         </StoreContext.Consumer>
//
//     );
// }

export type MapStateToPropsType = {
    posts:PostsDataType[]
    newPostText: string
}
export type mapDispatchToPropsType = {
    addPost: (newPostText: string)=>void,
    updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>)=>void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        addPost: (newPostText: string)=>{
           dispatch(addPostAC(newPostText))
        },
        updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>)=>{
            dispatch(changeNewTextPostAC(e.currentTarget.value))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;