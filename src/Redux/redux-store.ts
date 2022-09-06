import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer
})

export let store = createStore(rootReducer)
export type AppStateType = ReturnType<typeof rootReducer>
//@ts-ignore
window.store = store