
export type UsersType = {
    "name": string,
    "id": number,
    "uniqueUrlName": null,
    "photos": {"small": null, "large": null}
    "status": null,
    "followed": boolean

}
export type UsersPageType = {
    "items": UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}

let initialState: UsersPageType = {
    "items": [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 2
};
export type FollowAT = ReturnType<typeof followAC>
export type UnfollowAT = ReturnType<typeof unfollowAC>
export type SetUsersAT = ReturnType<typeof setUsersAC>
export type setCurrentPageAT = ReturnType<typeof setCurrentPageAC>
export type ActionsTypes = FollowAT | UnfollowAT | SetUsersAT | setCurrentPageAT

export const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                items: [...state.items.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })]
            }

        case "UNFOLLOW":
            return {
                ...state,
                items: [...state.items.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })]
            }

        case "SET-USERS":
            return {
                ...state,
                items: [...state.items, ...action.users]
            }

        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }

        default:
            return state
    }
};

export const followAC = (userId: number) => {
    return {type: "FOLLOW", userId} as const
}
export const unfollowAC = (userId: number)=> {
    return {type: "UNFOLLOW", userId} as const
}
export const setUsersAC = (users: UsersType[])=> {
    return {type: "SET-USERS", users} as const
}
export const setCurrentPageAC = (currentPage: number)=>{
    return{type: "SET-CURRENT-PAGE", currentPage} as const
}