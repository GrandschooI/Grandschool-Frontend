import React, {FC} from 'react';
import s from './Pagination.module.scss'
import cn from "classnames";
import {useAppSelector} from "../../../utils/Hooks/useAppSelector";
import {getThemeStyle} from "../../../Redux/selectors/styleSelector";

const Pagination: FC<paginationPropsType> = (
    {
        sendCurrentPage,
        currentPage,
        lastPage,
        prevPageURL,
        nextPageURL
    }) => {
    const themeStyle = useAppSelector(getThemeStyle)
    const changeTheme = (name: string) => cn(name, s[themeStyle ? themeStyle : ''], [themeStyle ? themeStyle : ''])
    const paginationItem = changeTheme(s.paginationItem)
    const active = changeTheme(s.active)

    const pagesNumber = []
    for (let i = 1; i <= lastPage; i++) {
        pagesNumber.push(i)
    }

    const onclickHandleCurrentPage = (pageNumber: number) => {
        sendCurrentPage(pageNumber)
    }
    return (
        <div className={s.paginationWrapper}>
            <ul className={s.paginationList}>
                <li className={paginationItem}>
                    <button className={paginationItem} type='button'
                            onClick={() => onclickHandleCurrentPage(Number(prevPageURL?.split('=')[1]))}>prev
                    </button>
                </li>
                {
                    pagesNumber.map((pageNumber, index) => (
                        <li className={s.paginationItem} key={index}>
                            <button type='button'
                                    className={currentPage === pageNumber ? active : paginationItem}
                                    onClick={() => onclickHandleCurrentPage(index + 1)}
                            >{pageNumber}</button>
                        </li>
                    ))
                }
                <li className={paginationItem}>
                    <button className={paginationItem} type='button'
                            onClick={() => onclickHandleCurrentPage(Number(nextPageURL?.split('=')[1]))}>next
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;

type paginationPropsType = {
    prevPageURL: string | null
    nextPageURL: string | null
    sendCurrentPage: (page: number) => void
    currentPage: number
    lastPage: number
}