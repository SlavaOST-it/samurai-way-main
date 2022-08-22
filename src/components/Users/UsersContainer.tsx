import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UsersType,} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";


type MapStatePropsType = {
    users: UsersType[]
}
type MapDispatchPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: UsersType[]) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.items,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: any[]) => {
            dispatch(setUsersAC(users))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;