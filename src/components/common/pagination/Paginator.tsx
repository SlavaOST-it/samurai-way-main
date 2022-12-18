import React, {useState} from 'react';
import s from "./Paginator.module.css"

type PaginatorType = {
    totalItemsCount: number,
    pageSize: number,
    onPageChanges: (pageNumber: number) => void,
    currentPage: number,
    portionSize: number
}

export const Paginator = (props: PaginatorType) => {
    const pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / props.portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    const rightPortionPageNumber = (portionNumber * props.portionSize);

    return (
            <div className={s.pagesList}>
                {portionNumber > 1 &&
                <button onClick={()=>{setPortionNumber(portionNumber - 1)}}>PREV</button>}

                 {pages
                     .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                    return <span key={p} className={props.currentPage === p ? s.pageSelected : ""}
                                 onClick={() => {
                                     props.onPageChanges(p)
                                 }}>{p}</span>
                })}
                {portionCount > portionNumber &&
                <button onClick={()=> {setPortionNumber(portionNumber + 1)} }>NEXT</button>}
            </div>
    );
};