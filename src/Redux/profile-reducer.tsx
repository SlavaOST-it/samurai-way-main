import React from 'react';
import {ActionsTypes, AddPostActionType, ChangeNewTextPostActionType, PostsDataType} from "./store";


let initialState = {
    posts: [
        {id: 1, message: 'Do you like me', likesCount: 1},
        {id: 2, message: 'What it is?', likesCount: 5},
        {id: 3, message: 'oh, no men', likesCount: 2},
        {id: 4, message: 'Oooo ha ha ha lol', likesCount: 10},
        {id: 5, message: 'Oooo ha ha ha lol', likesCount: 10}
    ],
    newPostText: ''
};

export const profileReducer = (state: any = initialState, action: ActionsTypes) => {
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