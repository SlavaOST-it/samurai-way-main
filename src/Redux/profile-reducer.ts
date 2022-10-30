import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import axios, {AxiosError} from "axios";

export type AddPostAT = ReturnType<typeof addPostAC>
export type SetUserProfileAT = ReturnType<typeof setUserProfileAC>
export type SetUserStatusAT = ReturnType<typeof setUserStatusAC>
export type SetUserPhotoAT = ReturnType<typeof setUserPhoto>
export type ProfileActionsTypes =
    | AddPostAT
    | SetUserProfileAT
    | SetUserStatusAT
    | SetUserPhotoAT

export type PostsDataType = {
    id: number,
    message: string,
    likesCount: number
}

export type UserProfileType = {
    userId: number | null,
    aboutMe: string | null
    lookingForAJob: boolean | null,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    contacts: {
        github: string | null,
        vk: string | null,
        facebook: string | null,
        instagram: string | null,
        twitter: string | null,
        website: string | null,
        youtube: string | null,
        mainLink: string | null,
    },
    photos: PhotoProfile
}
export type PhotoProfile = {
    small: string | null,
    large: string | null
}
export type ProfilePageType = {
    profile: UserProfileType[] | null,
    photoUser: string | null,
    status: string,
    posts: PostsDataType[]
}

let initialState: ProfilePageType = {
    profile: null,
    photoUser: null,
    status: "",
    posts: [
        {id: 1, message: 'Do you like me', likesCount: 1},
        {id: 2, message: 'What it is?', likesCount: 5},
        {id: 3, message: 'oh, no men', likesCount: 2},
        {id: 4, message: 'Oooo ha ha ha lol', likesCount: 10},
        {id: 5, message: 'Oooo ha ha ha lol', likesCount: 10}
    ]
};

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsTypes): ProfilePageType => {
    switch (action.type) {
        case "PROFILE/ADD-POST": {
            const newPost: PostsDataType = {
                id: new Date().getTime(),
                message: action.postText.trim(),
                likesCount: 0
            }
            return {
                ...state,
                posts: [newPost, ...state.posts]
            };
        }
        case "PROFILE/SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }
        case "PROFILE/SET-USER-STATUS": {
            return {
                ...state,
                status: action.status
            }
        }
        case "PROFILE/SET-USER-PHOTO": {
            return {
                ...state,
                photoUser: action.photo
            }
        }
        default:
            return state
    }
};

// ==================ACTION CREATORS =======================//
export const addPostAC = (postText: string) => ({type: "PROFILE/ADD-POST", postText} as const)
export const setUserProfileAC = (profile: UserProfileType[]) => ({type: "PROFILE/SET-USER-PROFILE", profile} as const)
export const setUserStatusAC = (status: string) => ({type: "PROFILE/SET-USER-STATUS", status} as const)
export const setUserPhoto = (photo: string) => ({type: "PROFILE/SET-USER-PHOTO", photo} as const)

// ==================THUNK CREATORS =======================//
export const getProfileThunkCreator = (userId: number) => async (dispatch: Dispatch<ProfileActionsTypes>) => {
    try {
        let res = await profileAPI.getProfile(userId)
        dispatch(setUserProfileAC(res))
    } catch (e) {
        const err = e as Error | AxiosError
        if (axios.isAxiosError(err)) {
            const error = err.response?.data
                ? (err.response.data as ({ error: string })).error
                : err.message
            alert(error)
        }
    }
}
export const getStatusThunkCreator = (userId: number) => async (dispatch: Dispatch<ProfileActionsTypes>) => {
    try {
        let res = await profileAPI.getStatus(userId)
        dispatch(setUserStatusAC(res))
    } catch (e) {
        const err = e as Error | AxiosError
        if (axios.isAxiosError(err)) {
            const error = err.response?.data
                ? (err.response.data as ({ error: string })).error
                : err.message
            alert(error)
        }
    }
}
export const updateStatusThunkCreator = (status: string) => async (dispatch: Dispatch<ProfileActionsTypes>) => {
    try {
        let res = await profileAPI.updateStatus(status)
        if (res.resultCode === 0) {
            dispatch(setUserStatusAC(status));
        }
    } catch (e) {
        const err = e as Error | AxiosError
        if (axios.isAxiosError(err)) {
            const error = err.response?.data
                ? (err.response.data as ({ error: string })).error
                : err.message
            alert(error)
        }
    }
}
export const updatePhotoUser = (photo: string) => async (dispatch: Dispatch<ProfileActionsTypes>) => {
    try {
        let res = await profileAPI.updatePhoto(photo)
        if (res.resultCode === 0) {
            dispatch(setUserPhoto(res.response.photos.small))
        }
    } catch (e) {
        const err = e as Error | AxiosError
        if (axios.isAxiosError(err)) {
            const error = err.response?.data
                ? (err.response.data as ({ error: string })).error
                : err.message
            alert(error)
        }
    }
}
