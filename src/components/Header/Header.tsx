import React, { useEffect, useState } from 'react'

import '../../style.scss'
import './HeaderGlobal.scss'
import cn from 'classnames'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { setOptionsMode, switchBlindMode } from '../../Redux/reducers/styleSlice'
import {
  getFontSize,
  getOptionsState,
  getStyleMode,
  getThemeStyle,
} from '../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../utils/Hooks/useAppSelector'
import HeaderNav from '../common/HeaderNav'
import HeaderNavForMainPage from '../common/HeaderNavForMainPage'
import SearchField from '../common/SearchField'
import LogoPicture from '../SVGConponents/Header/LogoPicture'
import LogoPictureBlueTheme from '../SVGConponents/Header/LogoPictureBlueTheme'
import LogoPictureWhiteTheme from '../SVGConponents/Header/LogoPictureWhiteTheme'
import LogoPictureYellowTheme from '../SVGConponents/Header/LogoPictureYellowTheme'
import LogoWords from '../SVGConponents/Header/LogoWords'
import LogoWordsBlueTheme from '../SVGConponents/Header/LogoWordsBlueTheme'
import LogoWordsWhiteTheme from '../SVGConponents/Header/LogoWordsWhiteTheme'
import LogoWordsYellowTheme from '../SVGConponents/Header/LogoWordsYellowTheme'
import BlindButton from '../utils/BlindButton/BlindButton'

import BlindModeOptions from './BlindModeOptions/BlindModeOptions'
import s from './Header.module.scss'

const Header: React.FC<propsType> = ({ isHeaderChange }) => {
  const blindModeFromLocalStorage = localStorage.getItem('blindModeFromLocalStorage')
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)
  const blindMode = useAppSelector(getStyleMode)
  const isOptionsOpen = useAppSelector(getOptionsState)

  const dispatch = useDispatch()

  const [isBurgerActive, setBurgerClass] = useState(false)

  const toggleBlindModeHandler = () => {
    dispatch(switchBlindMode({ blindMode: !blindMode }))
  }
  const onBurgerClickHandler = () => {
    setBurgerClass(!isBurgerActive)
    if (isOptionsOpen) {
      dispatch(setOptionsMode({ optionsMode: !isOptionsOpen }))
    }
  }
  const optionsModeHandler = () => {
    dispatch(setOptionsMode({ optionsMode: !isOptionsOpen }))
    if (isBurgerActive) {
      setBurgerClass(false)
    }
  }

  useEffect(() => {
    if (blindModeFromLocalStorage) {
      dispatch(switchBlindMode({ blindMode: true }))
    }
  }, [blindModeFromLocalStorage])

  return (
    <div className={cn(s.header, s[themeStyle ? themeStyle : ''], 'header', s[fontSize])}>
      <BlindModeOptions />
      <div className={cn('container', s[isBurgerActive ? 'active' : ''])}>
        <div className={cn(s.headerTop)}>
          <a href="/" className={s.logoWrap} rel="noreferrer">
            {!blindMode && <LogoPicture />}
            {themeStyle === 'yellowTheme' && <LogoPictureYellowTheme />}
            {themeStyle === 'whiteTheme' && <LogoPictureWhiteTheme />}
            {themeStyle === 'blueTheme' && <LogoPictureBlueTheme />}
            {!blindMode && <LogoWords />}
            {themeStyle === 'yellowTheme' && <LogoWordsYellowTheme />}
            {themeStyle === 'whiteTheme' && <LogoWordsWhiteTheme />}
            {themeStyle === 'blueTheme' && <LogoWordsBlueTheme />}
          </a>
          {!isHeaderChange ? <SearchField themeStyle={themeStyle} /> : <HeaderNavForMainPage />}
          {blindMode && (
            <button
              onClick={optionsModeHandler}
              className={cn(s.closeBlindOptions, s[isOptionsOpen ? '' : 'revert'])}
            >
              <svg
                width="35"
                height="32"
                viewBox="0 0 180 208"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M92.4749 105.525C91.108 104.158 88.892 104.158 87.5251 105.525L65.2513 127.799C63.8844 129.166 63.8844 131.382 65.2513 132.749C66.6181 134.116 68.8342 134.116 70.201 132.749L90 112.95L109.799 132.749C111.166 134.116 113.382 134.116 114.749 132.749C116.116 131.382 116.116 129.166 114.749 127.799L92.4749 105.525ZM93.5 208L93.5 108H86.5L86.5 208H93.5Z"
                  fill="black"
                />
                <path
                  d="M180 135C180 123.181 177.672 111.478 173.149 100.558C168.626 89.6392 161.997 79.7177 153.64 71.3604C145.282 63.0031 135.361 56.3738 124.442 51.8508C113.522 47.3279 101.819 45 90 45C78.181 45 66.4778 47.3279 55.5585 51.8508C44.6392 56.3738 34.7177 63.0031 26.3604 71.3604C18.0031 79.7177 11.3738 89.6392 6.85084 100.558C2.32792 111.478 -1.03325e-06 123.181 0 135L8.87461 135C8.87461 124.346 10.973 113.797 15.0499 103.955C19.1268 94.1121 25.1025 85.1689 32.6357 77.6357C40.1689 70.1025 49.1121 64.1268 58.9547 60.0499C68.7972 55.973 79.3465 53.8746 90 53.8746C100.654 53.8746 111.203 55.973 121.045 60.0499C130.888 64.1268 139.831 70.1025 147.364 77.6357C154.898 85.1689 160.873 94.1121 164.95 103.955C169.027 113.797 171.125 124.346 171.125 135H180Z"
                  fill="black"
                />
              </svg>
            </button>
          )}
          <div className={s.headerBtnWrap}>
            <BlindButton
              switchBlindModeAC={toggleBlindModeHandler}
              themeStyle={themeStyle}
              blindMode={blindMode}
              fontSize={fontSize}
            />

            <NavLink className={cn(s.headerNavItem, s[fontSize ? fontSize : ''])} to="/profile">
              Twoje konto
            </NavLink>
            <button className={s.burgerBtn} onClick={onBurgerClickHandler}>
              <svg
                className={cn(s.ham, s.ham6, s[isBurgerActive ? 'active' : ''])}
                viewBox="0 0 100 100"
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
            </button>
          </div>
        </div>
      </div>
      <div className={cn(s[isBurgerActive ? 'active' : ''])}>
        {!isHeaderChange && <HeaderNav themeStyle={themeStyle} fontSize={fontSize} />}
      </div>
    </div>
  )
}

export default Header

type propsType = {
  isHeaderChange: boolean
}
