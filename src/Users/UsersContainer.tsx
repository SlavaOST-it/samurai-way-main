import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {Dispatch} from "redux";
import {followAC, setUsers, unfollowAC, UsersPageType, UsersType} from "../Redux/users-reducer";
import {AppStateType} from "../Redux/redux-store";


type MapStatePropsType = {
    usersPage: UsersType []
}
type MapDispatchPropsType={
    followed: (userId: number) => void,
    unfollowed: (userId: number) =>void,
    setUsers: (users: UsersPageType) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage.users,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        followed: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollowed: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UsersPageType) => {
            dispatch(setUsers(users))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;