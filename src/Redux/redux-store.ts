import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileActionsTypes, profileReducer} from "./profile-reducer";
import {DialogsActionsTypes, dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {UsersActionsTypes, usersReducer} from "./users-reducer";
import {AuthActionsTypes, authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk"
import {reducer as formReducer} from "redux-form";


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer
})

// ===== Принимаем типизацию всех редьюсеров ===== //
type AppActionType = AuthActionsTypes | UsersActionsTypes | ProfileActionsTypes | DialogsActionsTypes


export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppStateType = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>

// ===== Типизация Диспатча для Экшенов и Санок ===== //
export type AppDispatch = ThunkDispatch<RootState, unknown, AppActionType>

// ===== Типизация того что возвращает нам Санка ===== //
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppActionType>
//@ts-ignore
window.store = store