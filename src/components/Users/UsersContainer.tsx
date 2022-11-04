import React from 'react';
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {
    followThunkCreation,
    getUsersThunkCreator,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC, toggleIsFetchingAC, unfollowThunkCreation,
    UsersType,
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/store";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingDisable,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/users-selectors";


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
    getUsers: (currentPage: number, pageSize: number) => void
    isAuth: boolean
}

class UsersContainer extends React.Component<any, UsersContainerType> {                // ANY !!!!!!!!!!!!!
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanges = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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
                followingDisable={this.props.followingDisable}
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
    setUsers: (users: UsersType[]) => void,
    setCurrentPage: (currentPage: number) => void,
    setUsersTotalCount: (totalCount: number) => void,
    toggleIsFetching: (isFetching: boolean) => void,
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingDisable: getFollowingDisable(state),
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
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
        }
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        mapDispatchToProps,
        follow: followThunkCreation,
        unfollow: unfollowThunkCreation,
        getUsers: getUsersThunkCreator
    }),
    withAuthRedirect
)(UsersContainer)