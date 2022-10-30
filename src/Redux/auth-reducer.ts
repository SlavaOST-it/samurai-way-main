import {Dispatch} from "redux";
import {authAPI, LoginParamsType} from "../api/api";
import {AppDispatch, AppThunk} from "./redux-store";
import axios, {AxiosError} from "axios";


export type SetUserDataAT = ReturnType<typeof setAuthUserDataAC>
export type ChangeAuthStatusAT = ReturnType<typeof changeAuthStatusAC>
export type SetErrorLoginAT = ReturnType<typeof setErrorLogin>

export type UsersPageType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    errorLogin: string | null
}

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    errorLogin: null
} as const;


export type AuthActionsTypes = SetUserDataAT | ChangeAuthStatusAT | SetErrorLoginAT

export const authReducer = (state: UsersPageType = initialState, action: AuthActionsTypes): UsersPageType => {
    switch (action.type) {
        case "AUTH/SET-USER-DATA": {
            return {
                ...state,
                ...action.payload
            }
        }
        case "AUTH/CHANGE-AUTH-STATUS":
            return {
                ...state,
                isAuth: action.isAuth
            }
        case "AUTH/SET-ERROR-LOGIN":
            return {
                ...state,
                errorLogin: action.error
            }
        default:
            return state
    }
};

// ===== ActionCreator ===== //
export const setAuthUserDataAC = (userId: number | null, email: string | null, login: string | null) => {
    return {type: "AUTH/SET-USER-DATA", payload: [userId, email, login]} as const
}
export const changeAuthStatusAC = (isAuth: boolean) => {
    return {type: "AUTH/CHANGE-AUTH-STATUS", isAuth} as const
}
export const setErrorLogin = (error: string | null) => {
    return {type: "AUTH/SET-ERROR-LOGIN", error} as const
}


// ===== ThunkCreator ===== //
export const getAuthThunkCreator = () => async (dispatch: AppDispatch) => {
    let res = await authAPI.getAuth()
    try {
        if (res.resultCode === 0) {
            let {id, email, login} = res.data
            dispatch(setAuthUserDataAC(id, email, login))
            dispatch(changeAuthStatusAC(true))
        }
    } catch (e) {
        const err = e as Error | AxiosError
        if (axios.isAxiosError(err)) {
            const error = err.response?.data
                ? (err.response.data as ({ error: string })).error
                : err.message
            alert(error)
        }
    }
}
export const loginThunkCreator = (data: LoginParamsType): AppThunk => async (dispatch) => {
    let res = await authAPI.login(data)
    try {
        if (res.data.resultCode === 0) {
            dispatch(getAuthThunkCreator())
        } else {
            const message = res.data.messages.length ? res.data.messages[0] : "Some error"
            dispatch(setErrorLogin(message))
        }
    } catch (e) {
        const err = e as Error | AxiosError
        if (axios.isAxiosError(err)) {
            const error = err.response?.data
                ? (err.response.data as ({ error: string })).error
                : err.message
            alert(error)
        }
    }
}
export const logoutThunkCreator = () => async (dispatch: Dispatch<AuthActionsTypes>) => {
    let res = await authAPI.logout()
    try {
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserDataAC(null, null, null))
            dispatch(changeAuthStatusAC(false))
        }

    } catch (e) {
        const err = e as Error | AxiosError
        if (axios.isAxiosError(err)) {
            const error = err.response?.data
                ? (err.response.data as ({ error: string })).error
                : err.message
            alert(error)
        }
    }
}