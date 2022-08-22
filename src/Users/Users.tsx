import React from 'react';
import {UsersPageType, UsersType} from "../Redux/users-reducer";
import s from "./Users.module.css"

type UsersPropsType = {
    users: UsersType [],
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: UsersPageType) => void
}


const Users = (props: UsersPropsType) => {
    return (
        <div className={s.body}>
            {props.users.map(u => <div key={u.id} className={s.userList}>

                <div className={s.block01}>
                    <div className={s.logoAndName}>
                        <img className={s.user_logo} src={u.photoUser} alt={"logo user"}/>
                        <div className={s.nameUser}>{u.fullName}</div>
                    </div>
                    <div>
                        {u.followed
                            ? <button className={s.btn}
                                      onClick={() => {
                                          props.follow(u.id)
                                      }
                                      }>
                                FOLLOW
                            </button>
                            : <button
                                className={s.btn}
                                onClick={() => {
                                    props.unfollow(u.id)
                                }
                                }> UNFOLLOW
                            </button>
                        }

                    </div>
                </div>
                <div className={s.block02}>
                    <span>
                        <div className={s.status}>{u.status}</div>
                    </span>
                    <span className={s.location}>
                        <div>{u.location.country}</div>
                         <div>{u.location.city}</div>
                    </span>
                </div>
            </div>)}
        </div>
    );
};

export default Users;