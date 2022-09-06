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
export type ProfilePageType = {
    posts: PostsDataType[]
    newPostText: string
    profile: null
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Do you like me', likesCount: 1},
        {id: 2, message: 'What it is?', likesCount: 5},
        {id: 3, message: 'oh, no men', likesCount: 2},
        {id: 4, message: 'Oooo ha ha ha lol', likesCount: 10},
        {id: 5, message: 'Oooo ha ha ha lol', likesCount: 10}
    ],
    newPostText: '',
    profile: null
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


export const setUserProfileAC = (profile: any) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}