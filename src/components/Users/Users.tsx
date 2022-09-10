import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../img/logo/user-logo.png";
import {UsersType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../api/api";


type UsersPropsType = {
    users: UsersType[],
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanges: (pageNumber: number) => void,
    isFetching: boolean,
    followingDisable: number [],
    toggleFollowingDisable: (isFetching: boolean, userId: number) =>void
}


export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    // const finalClassButton =  ? s.btnDisable : s.btn
    return (
        <div className={s.body}>
            <div className={s.pagesList}>
                {pages.map(p => {
                    return <span key={p} className={props.currentPage === p ? s.pageSelected : ""}
                                 onClick={() => {
                                     props.onPageChanges(p)
                                 }}>{p}</span>
                })}
            </div>

            {props.users.map(u => <div key={u.id} className={s.userList}>

                <div className={s.block01}>
                    <div className={s.logoAndName}>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={s.user_logo} src={u.photos.small != null ? u.photos.small : userPhoto}
                                 alt={"logo user"}/>
                        </NavLink>
                        <div className={s.nameUser}>{u.name}</div>
                    </div>
                    <div>
                        {u.followed

                            ? <button
                                className={props.followingDisable.some(id=> id == u.id) ? s.btnDisable : s.btn}
                                disabled={props.followingDisable.some(id=> id == u.id)}
                                onClick={() => {
                                    props.toggleFollowingDisable(true, u.id)
                                    followAPI.unfollow(u.id)
                                        .then((data) => {
                                            if (data.resultCode == 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.toggleFollowingDisable(false, u.id)
                                        })
                                }}> UNFOLLOW
                            </button>
                            :  <button className={props.followingDisable.some(id=> id == u.id) ? s.btnDisable : s.btn}
                                       disabled={props.followingDisable.some(id=> id == u.id)}
                                       onClick={() => {
                                           props.toggleFollowingDisable(true, u.id)
                                           followAPI.follow(u.id)
                                               .then((data) => {
                                                   if (data.resultCode == 0) {
                                                       props.follow(u.id)
                                                   }
                                                   props.toggleFollowingDisable(false, u.id)
                                               })
                                       }}>
                                FOLLOW
                            </button>
                        }
                    </div>
                </div>
                <div className={s.block02}>
                    <span>
                        <div className={s.status}>{u.status}</div>
                    </span>
                    <span className={s.location}>
                        <div>{"u.location.country"}</div>
                         <div>{"u.location.city"}</div>
                    </span>
                </div>
            </div>)}
        </div>
    );
};

export default Users;