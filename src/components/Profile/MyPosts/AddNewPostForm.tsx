import React from 'react';
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import s from "../../Dialogs/Dialogs.module.css";
import {addPostAC} from "../../../Redux/profile-reducer";

 export const AddNewPostForm = () => {
     const dispatch = useDispatch()

     const formik = useFormik({
         initialValues: {
             newPostText: ''
         },
         onSubmit: values => {
            dispatch(addPostAC(values.newPostText))
             formik.resetForm()
         },
     })



    return (
        <form onSubmit={formik.handleSubmit}>
             <textarea
                 className={s.textArea}
                 id={"newPostText"}
                 name="newPostText"
                 typeof="newPostText"
                 onChange={formik.handleChange}
                 value={formik.values.newPostText}
             />
            <button type={'submit'}>Опубликовать</button>
        </form>
    );
};
