import React, { FC } from 'react'

import cn from 'classnames'

import { getFontSize, getThemeStyle } from '../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../utils/Hooks/useAppSelector'
import { activeThemeStyle } from '../../../utils/scaffolding'

import s from './Pagination.module.scss'

const Pagination: FC<paginationPropsType> = ({
  sendCurrentPage,
  currentPage,
  lastPage,
  prevPageURL,
  nextPageURL,
}) => {
  const themeStyle = useAppSelector(getThemeStyle)

  const fontSize = useAppSelector(getFontSize)
  const changeTheme = (name: string) =>
    cn(name, s[activeThemeStyle(themeStyle)], [activeThemeStyle(themeStyle)])
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
    <div className={cn(s.paginationWrapper, s[fontSize])}>
      <ul className={s.paginationList}>
        <li className={paginationItem}>
          <button
            className={paginationItem}
            type="button"
            onClick={() => onclickHandleCurrentPage(Number(prevPageURL?.split('=')[1]))}
          >
            prev
          </button>
        </li>
        {pagesNumber.map((pageNumber, index) => (
          <li className={s.paginationItem} key={index}>
            <button
              type="button"
              className={currentPage === pageNumber ? active : paginationItem}
              onClick={() => onclickHandleCurrentPage(index + 1)}
            >
              {pageNumber}
            </button>
          </li>
        ))}
        <li className={paginationItem}>
          <button
            className={paginationItem}
            type="button"
            onClick={() => onclickHandleCurrentPage(Number(nextPageURL?.split('=')[1]))}
          >
            next
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Pagination

type paginationPropsType = {
  prevPageURL: string | null
  nextPageURL: string | null
  sendCurrentPage: (page: number) => void
  currentPage: number
  lastPage: number
}
