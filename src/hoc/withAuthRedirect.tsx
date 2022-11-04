import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../Redux/store";
import {connect} from "react-redux";


type MapStatePropsType = {
    isAuth: boolean
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStatePropsType) => {
        let {isAuth, ...restProps} = props
        //проверка на логинизацию
        if (!props.isAuth) return <Redirect to={"/login"}/>

        return <Component {...restProps as T}/>
    }
    return connect(mapStateToProps)(RedirectComponent)
}
