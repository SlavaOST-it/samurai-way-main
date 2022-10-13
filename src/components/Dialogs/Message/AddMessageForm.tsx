import React from 'react';
import s from "../Dialogs.module.css";
import logoSend from "../../img/logo/icons-message-email-send.png";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {addNewMessageAC} from "../../../Redux/dialogs-reducer";


export const AddMessageForm = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            newMessageText: ''
        },
        onSubmit: values => {
            dispatch(addNewMessageAC(values.newMessageText))
            formik.resetForm()
        },
    })


    return (
        <form onSubmit={formik.handleSubmit}>
            <textarea
                className={s.textArea}
                id={"newMessageText"}
                name="newMessageText"
                typeof="newMessageText"
                onChange={formik.handleChange}
                value={formik.values.newMessageText}
            />
            <button type={'submit'}><img className={s.logo_send} src={logoSend} alt={'send'}/></button>

        </form>
    );
};

