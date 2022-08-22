
export type UsersType = {
    "name": string,
    "id": number,
    "uniqueUrlName": null,
    "photos": {"small": null, "large": null}
    "status": null,
    "followed": boolean

}
export type UsersPageType = {
    "items": UsersType[]
}

let initialState: UsersPageType = {
    "items": []

};
export type FollowAT = {
    type: "FOLLOW",
    "userId": number
}
export type UnfollowAT = {
    type: "UNFOLLOW",
    "userId": number
}
export type SetUsersAT = {
    type: "SET_USERS",
    users: UsersType[]
}
export type ActionsTypes = FollowAT | UnfollowAT | SetUsersAT

export const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state, items: [...state.items.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })]
            }

        case "UNFOLLOW":
            return {
                ...state, items: [...state.items.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })]
            }

        case "SET_USERS":
            return {
                ...state, items: [...state.items, ...action.users]
            }

        default:
            return state
    }
};

export const followAC = (userId: number): FollowAT => {
    return {type: "FOLLOW", userId}
}
export const unfollowAC = (userId: number): UnfollowAT => {
    return {type: "UNFOLLOW", userId}
}
export const setUsersAC = (users: UsersType[]): SetUsersAT => {
    return {type: "SET_USERS", users}
}
