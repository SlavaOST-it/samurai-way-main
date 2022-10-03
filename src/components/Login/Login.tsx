import React from 'react';
import s from './Login.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean
}


export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div className={s.input_login}>
                    <Field placeholder={"Login"} name={"login"} component={"input"}/>
                </div>
                <div className={s.input_password}>
                    <Field placeholder={"Password"} name={"password"} component={"input"}/>
                </div>
                <div className={s.checkbox}>
                    <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
                </div>
                <div className={s.btn_login}>
                    <button>Login</button>
                </div>
            </form>
    );
};

// контейнерная компонента
const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)


export const Login = () => {
    const onSubmit = (formData: FormDataType) =>{
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
           <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

