import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileActionsTypes, profileReducer} from "./profile-reducer";
import {DialogsActionsTypes, dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {UsersActionsTypes, usersReducer} from "./users-reducer";
import {AuthActionsTypes, authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk"
import {AppActionsTypes, appReducer} from "./app-reducer";


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    app: appReducer,
})

// ===== Принимаем типизацию всех редьюсеров ===== //
type ReduxActionType = AuthActionsTypes | UsersActionsTypes | ProfileActionsTypes | DialogsActionsTypes | AppActionsTypes


export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppStateType = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>

// ===== Типизация Диспатча для Экшенов и Санок ===== //
export type AppDispatch = ThunkDispatch<RootState, unknown, ReduxActionType>

// ===== Типизация того что возвращает нам Санка ===== //
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ReduxActionType>
//@ts-ignore
window.store = store