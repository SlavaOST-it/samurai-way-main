
export type UsersType = {
    id: number,
    followed: boolean,
    fullName: string,
    status: string,
    location: { city: string, country: string }
}
export type UsersPageType = {
    users: UsersType[]
}

let initialState: UsersPageType = {
    users: [
        {
            id: 1,
            followed: true,
            fullName: 'Slava',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            followed: true,
            fullName: 'Natasha',
            status: 'I am funny',
            location: {city: 'Warshaw', country: 'Poland'}
        },
        {id: 3, followed: false, fullName: 'Oleg', status: 'Good day', location: {city: 'Berlin', country: 'Germany'}},
        {
            id: 4,
            followed: true,
            fullName: 'Lubov',
            status: 'SuperWomen',
            location: {city: 'Krasovsky', country: 'Belarus'}
        },
        {id: 5, followed: false, fullName: 'Alex', status: 'I am lazy', location: {city: 'Iye', country: 'Belarus'}},

    ]

};
export type FollowAT={
    type: "FOLLOW",
    id: number
}
export type UnfollowAT={
    type: "UNFOLLOW",
    id: number
}
export type SetUsersAT={
    type: "SET_USERS",
    users: UsersType[]
}
export type ActionsTypes = FollowAT| UnfollowAT|SetUsersAT

export const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state, users: [...state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u
                })]
            }

        case "UNFOLLOW":
            return {
                ...state, users: [...state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u
                })]
            }

        case "SET_USERS":
            return {
                ...state, users: [...state.users, ...action.users]
            }

        default:
            return state
    }
};

export const followAC = (userId: number) => {
    return {type: "FOLLOW", userId}
}
export const unfollowAC = (userId: number) => {
    return {type: "UNFOLLOW", userId}
}
export const setUsers = (users: UsersPageType)=>{
    return{type: "SET_USERS", users}
}