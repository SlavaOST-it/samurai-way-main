import React from "react";
import s from "./Loading.module.css"


export const Preloader = () => {
    return (
        <>
            <div className={s.loader}>
            <div className={s.innerOne}></div>
            <div className={s.innerTwo}></div>
            <div className={s.innerThree}></div>
        </div>

        </>
    );
};

