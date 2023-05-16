import React, { ChangeEvent, useState } from 'react'

import cn from 'classnames'

import { Nullable } from '../../Redux/redux-toolkit-store'
import { activeThemeStyle } from '../../utils/scaffolding'
import s from '../Header/Header.module.scss'
import SearchIcon from '../SVGConponents/SearchField/SearchIcon'

import { SearchRequestField } from './SearchRequestField'

const SearchField: React.FC<PropsType> = ({ themeStyle }) => {
  const [searchStatus, setSearchStatus] = useState(false)
  const [searchText, setSearchText] = useState('')

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value)
  }

  return (
    <>
      <div className={cn(s.headerSearch, s[activeThemeStyle(themeStyle)])}>
        <input
          type="search"
          placeholder={'Czego szukasz?'}
          onFocus={() => setSearchStatus(true)}
          onBlur={() => setSearchStatus(false)}
          onChange={onChangeHandler}
        />
        <button>
          <SearchIcon />
        </button>
        <SearchRequestField searchText={searchText} searchStatus={searchStatus} />
      </div>
    </>
  )
}

export default SearchField

type PropsType = {
  themeStyle: Nullable<string>
}
