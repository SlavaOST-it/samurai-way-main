import React from 'react';
import {UsersType} from "../../Redux/users-reducer";
import axios from "axios";
import Users from "./Users";

type UsersAPIComponentType = {
    users: UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: UsersType[]) => void,
    setCurrentPage: (currentPage: number) => void,
    setUsersTotalCount: (totalCount: number) => void
}
export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "dd070108-da2d-47ec-bd5a-e22f291be6bf"
    }
});

export class UsersAPIComponent extends React.Component<UsersAPIComponentType, UsersAPIComponentType> {

    componentDidMount() {
        if (this.props.users.length === 0) {
            instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then((response) => {
                    this.props.setUsers(response.data.items);
                    this.props.setUsersTotalCount(response.data.totalCount)
                })
        }
    }

    onPageChanges = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        return (
            <Users
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanges={this.onPageChanges}
            />
        );
    }
}

