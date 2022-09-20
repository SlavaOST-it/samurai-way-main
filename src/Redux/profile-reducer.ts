import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export type ChangeNewTextPostAT = ReturnType<typeof changeNewTextPostAC>
export type AddPostAT = ReturnType<typeof addPostAC>
export type AddNewMessageAT = ReturnType<typeof addNewMessageAC>
export type ChangeNewMessageTextAT = ReturnType<typeof changeNewMessageTextAC>
export type SetUserProfileAT = ReturnType<typeof setUserProfileAC>

export type ActionsTypes =
    ChangeNewTextPostAT
    | AddPostAT
    | AddNewMessageAT
    | ChangeNewMessageTextAT
    | SetUserProfileAT


export type PostsDataType = {
    id: number,
    message: string,
    likesCount: number
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotoType = {
    small: (string)
    // URL address of user photo (small size) (null if photo is not uploaded to the server)
    large: (string)
    // URL address of user photo (large size) (null if photo is not uploaded to the server)
}
export type UserProfileType = {
    userId: number| null,
    aboutMe: string| null
    lookingForAJob: boolean | null,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    contacts: {
        github: string | null,
        vk: string | null,
        facebook:string | null,
        instagram: string | null,
        twitter: string | null,
        website: string | null,
        youtube: string | null,
        mainLink: string | null,
    },
    photos: {
        small: string | null,
        // URL address of user photo (small size) (null if photo is not uploaded to the server)
        large: string | null
        // URL address of user photo (large size) (null if photo is not uploaded to the server)
    }
}

export type ProfilePageType = {
    profile: UserProfileType[] | null
    posts: PostsDataType[]
    newPostText: string
}

let initialState: ProfilePageType = {
    profile: null,
    posts: [
        {id: 1, message: 'Do you like me', likesCount: 1},
        {id: 2, message: 'What it is?', likesCount: 5},
        {id: 3, message: 'oh, no men', likesCount: 2},
        {id: 4, message: 'Oooo ha ha ha lol', likesCount: 10},
        {id: 5, message: 'Oooo ha ha ha lol', likesCount: 10}
    ],
    newPostText: '',

};


export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case "CHANGE-NEW-TEXT-POST": {
            return {
                ...state,
                newPostText: action.newText
            }
        }

        case "ADD-POST": {
            const newPost: PostsDataType = {
                id: new Date().getTime(),
                message: state.newPostText.trim(),
                likesCount: 0
            }
            return (
                {
                    ...state,
                    newPostText: '',
                    posts: [newPost, ...state.posts],

                });
        }

        case "SET-USER-PROFILE":{
            return {
                ...state,
                profile: action.profile
            }
        }

        default:
            return state
    }
};


export const changeNewTextPostAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT-POST",
        newText
    } as const
}
export const addPostAC = (postText: string) => {
    return {
        type: "ADD-POST",
        newPostText: postText
    } as const
}
export const addNewMessageAC = (newMessageText: string) => {
    return {
        type: "ADD-NEW-MESSAGE",
        newMessageText
    } as const
}
export const changeNewMessageTextAC = (newMessage: string) => {
    return {
        type: "CHANGE-NEW-MESSAGE-TEXT",
        newMessage
    } as const
}
export const setUserProfileAC = (profile: UserProfileType[]) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}


export const getProfileThunkCreator = (userId: number) =>{
    return (dispatch: Dispatch<ActionsTypes>) =>{
        profileAPI.getProfile(userId)
            .then((data) => {
                dispatch(setUserProfileAC(data));
            })
    }
}
