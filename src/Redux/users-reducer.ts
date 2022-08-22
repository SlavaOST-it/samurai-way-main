export type UsersType = {
    id: number,
    photoUser: string
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
            photoUser: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/2B87/production/_90934111_1-1.jpg',
            followed: true,
            fullName: 'Slava',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUser: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/2B87/production/_90934111_1-1.jpg',
            followed: true,
            fullName: 'Natasha',
            status: 'I am funny',
            location: {city: 'Warshaw', country: 'Poland'}
        },
        {
            id: 3,
            photoUser: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/2B87/production/_90934111_1-1.jpg',
            followed: false,
            fullName: 'Oleg',
            status: 'Good day',
            location: {city: 'Berlin', country: 'Germany'}
        },
        {
            id: 4,
            photoUser: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/2B87/production/_90934111_1-1.jpg',
            followed: true,
            fullName: 'Lubov',
            status: 'SuperWomen',
            location: {city: 'Krasovsky', country: 'Belarus'}
        },
        {
            id: 5,
            photoUser: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/2B87/production/_90934111_1-1.jpg',
            followed: false,
            fullName: 'Alex',
            status: 'I am lazy',
            location: {city: 'Iye', country: 'Belarus'}
        },

    ]

};
export type FollowAT = {
    type: "FOLLOW",
    userId: number
}
export type UnfollowAT = {
    type: "UNFOLLOW",
    userId: number
}
export type SetUsersAT = {
    type: "SET_USERS",
    users: UsersType[]
}
export type ActionsTypes = FollowAT | UnfollowAT | SetUsersAT

export const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state, users: [...state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })]
            }

        case "UNFOLLOW":
            return {
                ...state, users: [...state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
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
export const setUsersAC = (users: UsersPageType) => {
    return {type: "SET_USERS", users}
}
