import {AppStateType} from "./store";

export const getUsers = (state: AppStateType) => {
    return state.usersPage.items
}
export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingDisable = (state: AppStateType) => {
    return state.usersPage.followingDisable
}