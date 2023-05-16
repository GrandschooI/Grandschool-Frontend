import React from 'react'

import cn from 'classnames'

import { getFontSize, getThemeStyle } from '../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../utils/Hooks/useAppSelector'
import s from '../Header/Header.module.scss'
import {activeThemeStyle} from "../../utils/scaffolding";

export const SearchRequestField = ({ searchText, searchStatus }: SearchRequestPropsType) => {
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)

  return (
    <div
      className={cn(
        s[searchStatus ? 'searchRequestField' : 'searchRequestNoField'],
          activeThemeStyle(themeStyle),
        s[fontSize]
      )}
    >
      {searchText ? (
        <div className={s.searchList}>
          <ul>
            List1
            <li>
              <a href={'#'}>
                {' '}
                <div>Sub1</div>
              </a>
            </li>
            <li>
              <a href={'#'}>
                {' '}
                <div>Sub1</div>
              </a>
            </li>
            <li>
              <a href={'#'}>
                {' '}
                <div>Sub1</div>
              </a>
            </li>
          </ul>
          <ul>
            List2
            <li>
              <a href={'#'}>
                <div>Sub2</div>
              </a>
            </li>
            <li>
              <a href={'#'}>
                {' '}
                <div>Sub2</div>
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <div className={s.noSearch}>No recent searches...</div>
      )}
    </div>
  )
}

type SearchRequestPropsType = {
  searchText: string
  searchStatus: boolean
}
