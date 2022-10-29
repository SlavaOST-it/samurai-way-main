import {AppDispatch} from "./redux-store";
import {getAuthThunkCreator} from "./auth-reducer";

export type SetInitializedAT = ReturnType<typeof setInitializedAC>
export type AppActionsTypes = SetInitializedAT
export type RequestStatusType = 'loading' | 'succeeded' | 'failed'

export type InitialStateType = {
    status: RequestStatusType
    error: string | null,
    isInitialized: boolean
}


let initialState: InitialStateType = {
    status: 'loading',
    error: null,
    isInitialized: false
};

export const appReducer = (state = initialState, action: AppActionsTypes) => {
    switch (action.type) {
        case "APP/SET-INITIALIZED":
            return {...state, isInitialized: action.value}
        default:
            return {...state}
    }
}


// ===== ActionCreators ===== //
export const setInitializedAC = (value: boolean) => ({type: "APP/SET-INITIALIZED", value} as const)


// ===== ThunkCreators ===== //
export const initializeAppTC = () => (dispatch: AppDispatch) => {
    let res = dispatch(getAuthThunkCreator())
    res.then(() => {
        dispatch(setInitializedAC(true))
    })
}