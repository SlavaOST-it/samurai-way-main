import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

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
    photos: {
        small: string | null,
        // URL address of user photo (small size) (null if photo is not uploaded to the server)
        large: string | null
        // URL address of user photo (large size) (null if photo is not uploaded to the server)
    }
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
        case "ADD-POST": {
            const newPost: PostsDataType = {
                id: new Date().getTime(),
                message: action.postText.trim(),
                likesCount: 0
            }
            return (
                {
                    ...state,
                    posts: [newPost, ...state.posts],

                });
        }
        case "SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }
        case "SET-USER-STATUS": {
            return {
                ...state,
                status: action.status
            }
        }
        case "SET-USER-PHOTO":{
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
export const addPostAC = (postText: string) => {
    return {
        type: "ADD-POST",
        postText
    } as const
}
export const setUserProfileAC = (profile: UserProfileType[]) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}
export const setUserStatusAC = (status: string) => {
    return {
        type: "SET-USER-STATUS",
        status
    } as const
}
export const setUserPhoto = (photo: string) => {
    return {
        type: "SET-USER-PHOTO",
        photo
    } as const
}


// ==================THUNK CREATORS =======================//
export const getProfileThunkCreator = (userId: number) => {
    return (dispatch: Dispatch<ProfileActionsTypes>) => {
        profileAPI.getProfile(userId)
            .then((data) => {
                dispatch(setUserProfileAC(data));
                dispatch(setUserPhoto(data.response.photos.small))
            })
    }
}
export const getStatusThunkCreator = (userId: number) => {
    return (dispatch: Dispatch<ProfileActionsTypes>) => {
        profileAPI.getStatus(userId)
            .then((data) => {
                dispatch(setUserStatusAC(data));
            })
    }
}
export const updateStatusThunkCreator = (status: string) => {
    return (dispatch: Dispatch<ProfileActionsTypes>) => {
        profileAPI.updateStatus(status)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(setUserStatusAC(status));
                }
            })
    }
}
export const updatePhotoUser = (photo: string) => {
    return (dispatch: Dispatch<ProfileActionsTypes>) =>{
        profileAPI.updatePhoto(photo)
            .then((data)=>{
                if(data.resultCode === 0){
                    dispatch(setUserPhoto(data.response.photos.small))
                }
            })
    }
}