import React from 'react';
import s from './Login.module.css'
import {useFormik} from "formik";
import {useDispatch} from "react-redux";

export type FormDataType = {
    login?: string,
    password?: string,
    rememberMe?: boolean
}

export const Login = () => {
    const dispatch = useDispatch()


    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormDataType = {}
            if (!values.login) {
                errors.login = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.login)) {
                errors.login = 'Invalid email address'
            }
            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length < 3) {
                errors.password = 'Password to be minimum 3 symbol'
            }
            return errors
        },
        onSubmit: values => {
           alert(JSON.stringify(values))
            formik.resetForm()
        }
    })


    return (
        <form onSubmit={formik.handleSubmit}>

                <input
                    className={s.input_login}
                    id={"login"}
                    // name="login"
                    // typeof="login"
                    // onChange={formik.handleChange}
                    // value={formik.values.login}
                    {...formik.getFieldProps('login')}
                />
                {formik.touched.login && formik.errors.login &&
                    <div style={{color: 'red'}}>{formik.errors.login}</div>}

            <div>
                <input
                    className={s.input_password}
                    id={"password"}
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
//                     <Field className={s.input_login} placeholder={"Login"} name={"login"} component={"input"}/>
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
//     form: 'login'
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

