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
                <div >
                    <Field className={s.input_login} placeholder={"Login"} name={"login"} component={"input"}/>
                </div>
                <div >
                    <Field className={s.input_password} placeholder={"Password"} name={"password"} component={"input"}/>
                </div>
                <div >
                    <Field className={s.checkbox} component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
                </div>
                <div >
                    <button className={s.btn_login}>Login</button>
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

