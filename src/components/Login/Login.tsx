import React from 'react';
import s from './Login.module.css'
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {loginThunkCreator} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Redirect} from "react-router-dom";

export type FormDataType = {
    email?: string,
    password?: string,
    rememberMe?: boolean,
    captcha?: string
}

export const Login = () => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch()


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: ''
        },
        validate: (values) => {
            const errors: FormDataType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length < 3) {
                errors.password = 'Password to be minimum 3 symbol'
            }
            return errors
        },
        onSubmit: values => {
            dispatch(loginThunkCreator(values))
            formik.resetForm()
        }
    })

if (isAuth){
    return <Redirect to={'/profile'}/>
}

    return (
        <form onSubmit={formik.handleSubmit}>

                <input
                    className={s.input_email}
                    id={"email"}
                    placeholder={"E-mail"}
                    // name="email"
                    // typeof="email"
                    // onChange={formik.handleChange}
                    // value={formik.values.email}
                    {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email &&
                    <div style={{color: 'red'}}>{formik.errors.email}</div>}

            <div>
                <input
                    className={s.input_password}
                    id={"password"}
                    placeholder={"Password"}
                    type="password"
                    // name="password"
                    // typeof="password"
                    // onChange={formik.handleChange}
                    // value={formik.values.password}
                    {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password &&
                    <div style={{color: 'red'}}>{formik.errors.password}</div>}
            </div>
            <div>
                <input
                    className={s.checkbox}
                    id={"rememberMe"}
                    name="rememberMe"
                    type="checkbox"
                    onChange={formik.handleChange}
                    checked={formik.values.rememberMe}
                /> Запомнить меня
            </div>
            <div>
                <button
                    type={'submit'}
                    className={s.btn_login}
                >Login
                </button>
            </div>


        </form>
    )
}


// export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
//     return (
//             <form onSubmit={props.handleSubmit}>
//                 <div >
//                     <Field className={s.input_login} placeholder={"Login"} name={"email"} component={"input"}/>
//                 </div>
//                 <div >
//                     <Field className={s.input_password} placeholder={"Password"} name={"password"} component={"input"}/>
//                 </div>
//                 <div >
//                     <Field className={s.checkbox} component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
//                 </div>
//                 <div >
//                     <button className={s.btn_login}>Login</button>
//                 </div>
//             </form>
//     );
// };
//
// // контейнерная компонента
// const LoginReduxForm = reduxForm<FormDataType>({
//     form: 'email'
// })(LoginForm)
//
//
// export const Login = () => {
//     const onSubmit = (formData: FormDataType) =>{
//         console.log(formData)
//     }
//     return (
//         <div>
//             <h1>Login</h1>
//            <LoginReduxForm onSubmit={onSubmit}/>
//         </div>
//     );
// };

