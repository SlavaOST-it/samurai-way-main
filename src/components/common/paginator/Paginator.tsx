import React from 'react';
import s from "./Paginator.module.css"

type PaginatorType = {
    totalUsersCount: number,
    pageSize: number,
    onPageChanges: (pageNumber: number) => void,
    currentPage: number,
}

export const Paginator = (props: PaginatorType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
            <div className={s.pagesList}>
                {pages.map(p => {
                    return <span key={p} className={props.currentPage === p ? s.pageSelected : ""}
                                 onClick={() => {
                                     props.onPageChanges(p)
                                 }}>{p}</span>
                })}
            </div>
    );
};