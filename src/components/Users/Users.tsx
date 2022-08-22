import React from 'react';
import {UsersType} from "../../Redux/users-reducer";
import userPhoto from "../img/logo/user-logo.png"
import s from "./Users.module.css"
import axios from "axios";

type UsersPropsType = {
    users: UsersType[],
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: UsersType[]) => void
}
export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "dd070108-da2d-47ec-bd5a-e22f291be6bf"
    }
});

export class Users extends React.Component<UsersPropsType, UsersPropsType> {

    componentDidMount() {
        if (this.props.users.length === 0) {
            instance.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
                this.props.setUsers(response.data.items)
            })
        }
    }

    render() {
        return (
            <div className={s.body}>

                {this.props.users.map(u => <div key={u.id} className={s.userList}>

                    <div className={s.block01}>
                        <div className={s.logoAndName}>
                            <img className={s.user_logo} src={u.photos.small != null ? u.photos.small : userPhoto}
                                 alt={"logo user"}/>
                            <div className={s.nameUser}>{u.name}</div>
                        </div>
                        <div>
                            {u.followed
                                ? <button className={s.btn}
                                          onClick={() => {
                                              this.props.follow(u.id)
                                          }
                                          }>
                                    FOLLOW
                                </button>
                                : <button
                                    className={s.btn}
                                    onClick={() => {
                                        this.props.unfollow(u.id)
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
                        <div>{"u.location.country"}</div>
                         <div>{"u.location.city"}</div>
                    </span>
                    </div>
                </div>)}
            </div>
        );
    }
}

