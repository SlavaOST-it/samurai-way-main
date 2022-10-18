import {Dispatch} from "redux";
import {authAPI, LoginParamsType} from "../api/api";
import {AppDispatch, AppThunk} from "./redux-store";
import {followThunkCreation} from "./users-reducer";


export type SetUserDataAT = ReturnType<typeof setAuthUserDataAC>
export type ChangeAuthStatusAT = ReturnType<typeof changeAuthStatusAC>

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
} as const;


export type AuthActionsTypes = SetUserDataAT | ChangeAuthStatusAT

export const authReducer = (state: UsersPageType = initialState, action: AuthActionsTypes): UsersPageType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {
                ...state,
                ...action.payload,
                // isAuth: true
            }
        }
        case "CHANGE-AUTH-STATUS":
            return {
                ...state,
                isAuth: action.isAuth
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


// ===== ThunkCreator ===== //
export const getAuthThunkCreator = () => {
    return (dispatch: AppDispatch) => {
        authAPI.getAuth()
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
}
export const loginThunkCreator = (data: LoginParamsType): AppThunk => (dispatch) => {     // DISPATCH TYPE !!!!!!!
    authAPI.login(data)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthThunkCreator())
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