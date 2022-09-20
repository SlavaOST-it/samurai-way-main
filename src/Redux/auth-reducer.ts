import {Dispatch} from "redux";
import {authAPI} from "../api/api";


export type SetUserDataAT = ReturnType<typeof setAuthUserDataAC>

export type UsersPageType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}as const ;


export type ActionsTypes = SetUserDataAT

export const authReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case "SET-USER-DATA":{
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }

        default:
            return state
    }
};

export const setAuthUserDataAC = (userId: number | null, email: number | null, login: number | null) => {
    return {type: "SET-USER-DATA", data: [userId, email, login]} as const
}


export const getAuthThunkCreator = () =>{
    return (dispatch: Dispatch<ActionsTypes>) =>{
        authAPI.getAuth()
            .then((data) => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setAuthUserDataAC(id, email, login))
                }
            })
    }
}