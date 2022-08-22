
export type AddPostActionType = {
    type: "ADD-POST",
    newPostText: string
}
export type ChangeNewTextPostActionType = {
    type: "CHANGE-NEW-TEXT-POST",
    newText: string
}
export type AddNewMessageActionType = {
    type: "ADD-NEW-MESSAGE",
    newMessageText: string
}
export type ChangeNewMessageTextActionType = {
    type: "CHANGE-NEW-MESSAGE-TEXT",
    newMessage: string
}
export type ActionsTypes =
    AddPostActionType
    | ChangeNewTextPostActionType
    | AddNewMessageActionType
    | ChangeNewMessageTextActionType

export type PostsDataType = {
    id: number,
    message: string,
    likesCount: number
}

export type ProfilePageType = {
    posts: PostsDataType[]
    newPostText: string
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Do you like me', likesCount: 1},
        {id: 2, message: 'What it is?', likesCount: 5},
        {id: 3, message: 'oh, no men', likesCount: 2},
        {id: 4, message: 'Oooo ha ha ha lol', likesCount: 10},
        {id: 5, message: 'Oooo ha ha ha lol', likesCount: 10}
    ],
    newPostText: ''
};


export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case "CHANGE-NEW-TEXT-POST": {
            return (
                {
                    ...state,
                    newPostText: action.newText
                }
            );
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