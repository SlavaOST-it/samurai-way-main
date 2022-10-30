import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../img/logo/user-logo.png";
import {UsersType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";


type UserPropsType = {
    user: UsersType
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    followingDisable: number []
}

export const User = (props: UserPropsType) => {
    const u = props.user
    return (
        <div className={s.userList}>
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
                            className={props.followingDisable.some(id => id === u.id) ? s.btnDisable : s.btn}
                            disabled={props.followingDisable.some(id => id === u.id)}
                            onClick={() => {
                                props.unfollow(u.id)
                            }}> UNFOLLOW
                        </button>
                        : <button className={props.followingDisable.some(id => id === u.id) ? s.btnDisable : s.btn}
                                  disabled={props.followingDisable.some(id => id === u.id)}
                                  onClick={() => {
                                      props.follow(u.id)
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
        </div>)
}