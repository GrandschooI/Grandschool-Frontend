import React, {FC} from 'react';
import s from './Pagination.module.scss'

const Pagination: FC<paginationPropsType> = (
  {sendCurrentPage,
    currentPage,
    lastPage,
    prevPageURL,
    nextPageURL
  }) => {

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
        <li className={s.paginationItem}>
          <button className={s.paginationItem} type='button' onClick={() => onclickHandleCurrentPage(Number(prevPageURL?.split('=')[1]))}>prev</button>
        </li>
        {
          pagesNumber.map((pageNumber, index) => (
            <li className={s.paginationItem} key={index}>
              <button type='button'
                      className={currentPage === pageNumber ? s.active : s.paginationItem}
                      onClick={() => onclickHandleCurrentPage(index + 1)}
              >{pageNumber}</button>
            </li>
          ))
        }
        <li className={s.paginationItem}>
          <button className={s.paginationItem} type='button' onClick={() => onclickHandleCurrentPage(Number(nextPageURL?.split('=')[1]))}>next</button>
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