import {Dispatch} from "redux";
import {usersAPI} from "../api/api";
import axios, {AxiosError} from "axios";

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
export type UsersActionsTypes =
    FollowAT
    | UnfollowAT
    | SetUsersAT
    | SetCurrentPageAT
    | SetUsersTotalCountAT
    | ToggleIsFetchingAT
    | toggleFollowingDisableAT

export const usersReducer = (state: UsersPageType = initialState, action: UsersActionsTypes): UsersPageType => {
    switch (action.type) {
        case "USERS/FOLLOW":
            return {
                ...state,
                items: [...state.items.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })]
            }
        case "USERS/UNFOLLOW":
            return {
                ...state,
                items: [...state.items.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })]
            }
        case "USERS/SET-USERS":
            return {
                ...state,
                items: action.users
            }
        case "USERS/SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "USERS/SET-USERS-TOTAL-COUNT":
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case "USERS/TOGGLE-IS-FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "USERS/TOGGLE-IS-FOLLOWING-PROGRESS":
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

// ===== ACTION CREATORS ===== //
export const followAC = (userId: number) => ({type: "USERS/FOLLOW", userId} as const)
export const unfollowAC = (userId: number) => ({type: "USERS/UNFOLLOW", userId} as const)
export const setUsersAC = (users: UsersType[]) => ({type: "USERS/SET-USERS", users} as const)
export const setCurrentPageAC = (requestPage: number) => ({
    type: "USERS/SET-CURRENT-PAGE",
    currentPage: requestPage
} as const)
export const setUsersTotalCountAC = (totalUsersCount: number) => ({
    type: "USERS/SET-USERS-TOTAL-COUNT",
    totalUsersCount
} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: "USERS/TOGGLE-IS-FETCHING", isFetching} as const)
export const toggleFollowingDisableAC = (isFetching: boolean, userId: number) => ({
        type: "USERS/TOGGLE-IS-FOLLOWING-PROGRESS",
        isFetching,
        userId
    } as const
)

// ===== THUNK CREATORS ===== //
export const getUsersThunkCreator = (requestPage: number, pageSize: number) => async (dispatch: Dispatch<UsersActionsTypes>) => {
    dispatch(toggleIsFetchingAC(true))
    dispatch(setCurrentPageAC(requestPage))
    try {
        let res = await usersAPI.getUsers(requestPage, pageSize)
        dispatch(toggleIsFetchingAC(false))
        dispatch(setUsersAC(res.items));
        dispatch(setUsersTotalCountAC(res.totalCount))
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
export const followThunkCreation = (userId: number) => async (dispatch: Dispatch<UsersActionsTypes>) => {
    dispatch(toggleFollowingDisableAC(true, userId))
    try {
        let res = await usersAPI.follow(userId)
        if (res.resultCode == 0) {
            dispatch(followAC(userId))
        }
        dispatch(toggleFollowingDisableAC(false, userId))
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
export const unfollowThunkCreation = (userId: number) => async (dispatch: Dispatch<UsersActionsTypes>) => {
    dispatch(toggleFollowingDisableAC(true, userId));
    try {
        let res = await usersAPI.unfollow(userId)
        if (res.resultCode == 0) {
            dispatch(unfollowAC(userId))
        }
        dispatch(toggleFollowingDisableAC(false, userId))
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
