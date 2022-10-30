import React from 'react';
import s from "./Users.module.css";
import {UsersType} from "../../Redux/users-reducer";
import {Paginator} from "../common/paginator/Paginator";
import {User} from "./User";


type UsersPropsType = {
    users: UsersType[],
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanges: (pageNumber: number) => void,
    followingDisable: number []
}

export const Users = (props: UsersPropsType) => {
    return (
        <div className={s.body}>
            <Paginator
                pageSize={props.pageSize}
                totalUsersCount={props.totalUsersCount}
                onPageChanges={props.onPageChanges}
                currentPage={props.currentPage}
            />
            {props.users.map(u => <User key={u.id}
                                        user={u}
                                        follow={props.follow}
                                        unfollow={props.unfollow}
                                        followingDisable={props.followingDisable}
            />)}
        </div>)
};