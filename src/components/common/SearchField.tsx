import React from 'react'
import s from '../Header/Header.module.scss'
import SearchIcon from '../SVGConponents/SearchField/SearchIcon'
import cn from 'classnames'
import {Nullable} from "../../Redux/redux-toolkit-store";

const SearchField:React.FC<PropsType> = ({themeStyle}) => {
  return (
    <div className={cn(s.headerSearch, s[themeStyle ? themeStyle : ''])}>
      <input type='search' placeholder={'Czego szukasz?'}/>
      <button>
        <SearchIcon/>
      </button>
    </div>
  )
}

export default SearchField

type PropsType = {
    themeStyle: Nullable<string>
}