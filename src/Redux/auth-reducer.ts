import {Dispatch} from "redux";
import {authAPI, LoginParamsType} from "../api/api";
import {AppDispatch, AppThunk} from "./redux-store";


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
        case "SET-USER-DATA": {
            return {
                ...state,
                ...action.payload
            }
        }
        case "CHANGE-AUTH-STATUS":
            return {
                ...state,
                isAuth: action.isAuth
            }
        case "SET-ERROR-LOGIN":
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
    return {type: "SET-USER-DATA", payload: [userId, email, login]} as const
}
export const changeAuthStatusAC = (isAuth: boolean) => {
    return {type: "CHANGE-AUTH-STATUS", isAuth} as const
}
export const setErrorLogin = (error: string | null) => {
    return {type: "SET-ERROR-LOGIN", error} as const
}


// ===== ThunkCreator ===== //
export const getAuthThunkCreator = () => (dispatch: AppDispatch) => {
    return authAPI.getAuth()
        .then((data) => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserDataAC(id, email, login))
                dispatch(changeAuthStatusAC(true))
            }
        })
        .catch(error => {
            alert(error)
        })
}
export const loginThunkCreator = (data: LoginParamsType): AppThunk => (dispatch) => {
    authAPI.login(data)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthThunkCreator())
            }
            else {
                const message = res.data.messages.length ? res.data.messages[0] : "Some error"
                dispatch(setErrorLogin(message))
            }
        })
        .catch((error) => {
            alert(error)
        })
}
export const logoutThunkCreator = () => (dispatch: Dispatch<AuthActionsTypes>) => {
    authAPI.logout()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(null, null, null))
                dispatch(changeAuthStatusAC(false))
            }
        })
        .catch((error) => {
            alert(error)
        })
}