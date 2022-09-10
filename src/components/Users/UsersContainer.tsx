import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC, toggleFollowingDisableAC, toggleIsFetchingAC,
    unfollowAC,
    UsersType,
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import Users from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {usersAPI} from "../../api/api";


type UsersContainerType = {
    users: UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    isFetching: boolean,
    followingDisable: number [],
    toggleIsFetching: (isFetching: boolean) => void
    setUsers: (users: UsersType[]) => void,
    setCurrentPage: (currentPage: number) => void,
    setUsersTotalCount: (totalCount: number) => void,
    toggleFollowingDisable: (isFetching: boolean, userId: number) =>void
}

class UsersContainer extends React.Component<UsersContainerType, UsersContainerType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then((data) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setUsersTotalCount(data.totalCount)
            })
    }

    onPageChanges = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then((data) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : null}
            <Users
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanges={this.onPageChanges}
                isFetching={this.props.isFetching}
                followingDisable={this.props.followingDisable}
                toggleFollowingDisable={this.props.toggleFollowingDisable}

            />
        </>
    }
}


type MapStatePropsType = {
    users: UsersType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingDisable: number []
}
type MapDispatchPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: UsersType[]) => void,
    setCurrentPage: (currentPage: number) => void,
    setUsersTotalCount: (totalCount: number) => void,
    toggleIsFetching: (isFetching: boolean) => void,
    toggleFollowingDisable: (isFetching: boolean, userId: number) =>void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingDisable: state.usersPage.followingDisable
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
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setUsersTotalCount: (totalUsersCount: number) => {
            dispatch(setUsersTotalCountAC(totalUsersCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
        toggleFollowingDisable: (isFetching: boolean, userId: number) =>{
            dispatch(toggleFollowingDisableAC(isFetching, userId))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);