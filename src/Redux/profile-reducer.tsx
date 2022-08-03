import React from 'react';
import {ActionsTypes, AddPostActionType, ChangeNewTextPostActionType, PostsDataType} from "./state";

export const profileReducer = (state: any, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsDataType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.unshift(newPost)
            state.newPostText = ''
            return state;

        case "CHANGE-NEW-TEXT-POST":
            state.newPostText = action.newText;
            return state;

        default:
            return state
    }
};

export const addPostAC = (postText: string): AddPostActionType => {
    return {
        type: "ADD-POST",
        newPostText: postText
    }
}

export const changeNewTextPostAC = (event: string): ChangeNewTextPostActionType => {
    return {
        type: "CHANGE-NEW-TEXT-POST",
        newText: event
    }
}