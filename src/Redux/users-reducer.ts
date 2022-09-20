import {Dispatch} from "redux";
import {usersAPI} from "../api/api";


export type UsersType = {
    "name": string,
    "id": number,
    "uniqueUrlName": null,
    "photos": { "small": null, "large": null }
    "status": null,
    "followed": boolean

}
export type UsersPageType = {
    items: UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingDisable: number[]
}

let initialState: UsersPageType = {
    items: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingDisable: []
};

export type FollowAT = ReturnType<typeof followAC>
export type UnfollowAT = ReturnType<typeof unfollowAC>
export type SetUsersAT = ReturnType<typeof setUsersAC>
export type SetCurrentPageAT = ReturnType<typeof setCurrentPageAC>
export type SetUsersTotalCountAT = ReturnType<typeof setUsersTotalCountAC>
export type ToggleIsFetchingAT = ReturnType<typeof toggleIsFetchingAC>
export type toggleFollowingDisableAT = ReturnType<typeof toggleFollowingDisableAC>
export type ActionsTypes =
    FollowAT
    | UnfollowAT
    | SetUsersAT
    | SetCurrentPageAT
    | SetUsersTotalCountAT
    | ToggleIsFetchingAT
    | toggleFollowingDisableAT

export const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                items: [...state.items.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })]
            }

        case "UNFOLLOW":
            return {
                ...state,
                items: [...state.items.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })]
            }

        case "SET-USERS":
            return {
                ...state,
                items: action.users
            }

        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }

        case "SET-USERS-TOTAL-COUNT":
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }

        case "TOGGLE-IS-FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }

        case "TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...state,
                followingDisable: action.isFetching
                    ? [...state.followingDisable, action.userId]
                    : state.followingDisable.filter(id => id != action.userId)
            }
        default:
            return state
    }
};

export const followAC = (userId: number) => {
    return {type: "FOLLOW", userId} as const
}
export const unfollowAC = (userId: number) => {
    return {type: "UNFOLLOW", userId} as const
}
export const setUsersAC = (users: UsersType[]) => {
    return {type: "SET-USERS", users} as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {type: "SET-CURRENT-PAGE", currentPage} as const
}
export const setUsersTotalCountAC = (totalUsersCount: number) => {
    return {type: "SET-USERS-TOTAL-COUNT", totalUsersCount} as const
}
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {type: "TOGGLE-IS-FETCHING", isFetching} as const
}
export const toggleFollowingDisableAC = (isFetching: boolean, userId: number) => {
    return {type: "TOGGLE-IS-FOLLOWING-PROGRESS", isFetching, userId} as const
}




export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<ActionsTypes>) => {
        dispatch(toggleIsFetchingAC(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then((data) => {
                dispatch(toggleIsFetchingAC(false))
                dispatch(setUsersAC(data.items));
                dispatch(setUsersTotalCountAC(data.totalCount))
            })
    }
}

export const followThunkCreation = (userId: number) => {
    return (dispatch: Dispatch<ActionsTypes>) => {
        dispatch(toggleFollowingDisableAC(true, userId))
        usersAPI.follow(userId)
            .then((data) => {
                if (data.resultCode == 0) {
                    dispatch(followAC(userId))
                }
                dispatch(toggleFollowingDisableAC(false, userId))
            })
    }
}
export const unfollowThunkCreation = (userId: number) => {
    return (dispatch: Dispatch<ActionsTypes>) => {
        dispatch(toggleFollowingDisableAC(true, userId));
        usersAPI.unfollow(userId)
            .then((data) => {
                if (data.resultCode == 0) {
                    dispatch(unfollowAC(userId))
                }
               dispatch(toggleFollowingDisableAC(false, userId))
            })
    }
}