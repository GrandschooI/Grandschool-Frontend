import React from 'react'

import cn from 'classnames'

import { Nullable } from '../../../Redux/redux-toolkit-store'
import s from '../../Header/Header.module.scss'
interface PropsType {
  isBurgerActive: boolean
  themeStyle: Nullable<string>
}

const BurgerMenuIcon = ({ isBurgerActive, themeStyle }: PropsType) => {
  return (
    <svg
      className={cn(s.ham, s.ham6, s[isBurgerActive ? 'active' : ''])}
      viewBox="25 25 60 50"
      width="60"
    >
      <path
        className={cn(s.line, s.top, s[themeStyle ? themeStyle : ''])}
        d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
      ></path>
      <path
        className={cn(s.line, s.middle, s[themeStyle ? themeStyle : ''])}
        d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
      ></path>
      <path
        className={cn(s.line, s.bottom, s[themeStyle ? themeStyle : ''])}
        d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
      ></path>
    </svg>
  )
}

export default BurgerMenuIcon
