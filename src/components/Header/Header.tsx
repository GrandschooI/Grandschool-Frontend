import React, {useEffect, useState} from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import cn from 'classnames'
import '../../style.scss'
import './HeaderGlobal.scss'
import SearchField from '../common/SearchField'
import HeaderNavForMainPage from '../common/HeaderNavForMainPage'
import HeaderNav from '../common/HeaderNav'
import LogoPicture from '../SVGConponents/Header/LogoPicture'
import LogoPictureWhiteTheme from '../SVGConponents/Header/LogoPictureWhiteTheme'
import LogoPictureYellowTheme from '../SVGConponents/Header/LogoPictureYellowTheme'
import LogoPictureBlueTheme from '../SVGConponents/Header/LogoPictureBlueTheme'
import LogoWords from '../SVGConponents/Header/LogoWords'
import LogoWordsYellowTheme from '../SVGConponents/Header/LogoWordsYellowTheme'
import LogoWordsWhiteTheme from '../SVGConponents/Header/LogoWordsWhiteTheme'
import LogoWordsBlueTheme from '../SVGConponents/Header/LogoWordsBlueTheme'
import s from './Header.module.scss'
import {styleActions} from '../../Redux/reducers/styleReducer';
import {useAppSelector} from '../../utils/Hooks/useAppSelector';
import {getFontSize, getOptionsState, getStyleMode, getThemeStyle} from '../../Redux/selectors/styleSelector';
import BlindModeOptions from './BlindModeOptions/BlindModeOptions';
import BlindButton from '../utils/BlindButton/BlindButton';
import {useDispatch} from 'react-redux';

const Header = () => {

  const blindModeFromLocalStorage = localStorage.getItem('blindModeFromLocalStorage')
  const routesWithDefaultHeader = ['/', '/login', '/registration', '/confirm-registration', '/not-found']
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)
  const blindMode = useAppSelector(getStyleMode)
  const isOptionsOpen = useAppSelector(getOptionsState)

  const dispatch = useDispatch()
  const {switchBlindModeAC, setOptionsModeAC} = styleActions

  const [isBurgerActive, setBurgerClass] = useState(false)
  useEffect(() => {
    if (blindModeFromLocalStorage === 'true' && !blindMode) {
      switchBlindModeAC(true)
    }
  })
  const location: string = useLocation().pathname
  const isHeaderChange: boolean = routesWithDefaultHeader.some((element: string) => element === location)

  const toggleBlindModeHandler = () => {
    dispatch(switchBlindModeAC(!blindMode))
  }
  useEffect(() => {
    if (blindModeFromLocalStorage) {
      dispatch(switchBlindModeAC(true))
    }
  }, [blindModeFromLocalStorage])

  return (
    <div className={cn(s.header, s[(themeStyle ? themeStyle : '')], 'header')}>
      <BlindModeOptions/>
      <div className={cn(s[fontSize], 'container')}>
        <div className={cn(s.headerTop, s[(isBurgerActive ? 'active' : '')])}>
          <a href="/" className={s.logoWrap} rel="noreferrer">
            {!blindMode && <LogoPicture/>}
            {themeStyle === 'yellowTheme' && <LogoPictureYellowTheme/>}
            {themeStyle === 'whiteTheme' && <LogoPictureWhiteTheme/>}
            {themeStyle === 'blueTheme' && <LogoPictureBlueTheme/>}
            {!blindMode && <LogoWords/>}
            {themeStyle === 'yellowTheme' && <LogoWordsYellowTheme/>}
            {themeStyle === 'whiteTheme' && <LogoWordsWhiteTheme/>}
            {themeStyle === 'blueTheme' && <LogoWordsBlueTheme/>}
          </a>
          {!isHeaderChange ? <SearchField themeStyle={themeStyle}/> : <HeaderNavForMainPage/>}

          {blindMode && <button onClick={() => setOptionsModeAC(!isOptionsOpen)}
                                className={cn(s.closeBlindOptions, s[(isOptionsOpen ? '' : 'revert')])}>
              <svg x="0px" y="0px" width="35" viewBox="0 0 512 512" fill="fff">
                  <g>
                      <g>
                          <path d="M369.227,283.365l-99.148-99.148c-7.734-7.694-20.226-7.694-27.96,0l-99.148,99.148c-6.365,7.416-6.365,18.382,0,25.798
			c7.119,8.309,19.651,9.28,27.96,2.161L256,226.256l85.267,85.069c7.734,7.694,20.226,7.694,27.96,0
			C376.921,303.591,376.921,291.098,369.227,283.365z"/>
                      </g>
                  </g>
              </svg>
          </button>
          }

          <div className={s.headerBtnWrap}>
            <BlindButton switchBlindModeAC={toggleBlindModeHandler} themeStyle={themeStyle} blindMode={blindMode} fontSize={fontSize}/>
            <NavLink className={s.headerNavItem} to="/profile">Twoje konto</NavLink>
            <button className={s.burgerBtn} onClick={() => setBurgerClass(!isBurgerActive)}>
              <svg className={cn(s.ham, s.ham6, s[(isBurgerActive ? 'active' : '')])} viewBox="0 0 100 100" width="60">
                <path className={cn(s.line, s.top)}
                      d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"></path>
                <path className={cn(s.line, s.middle)}
                      d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"></path>
                <path className={cn(s.line, s.bottom)}
                      d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {!isHeaderChange && <HeaderNav themeStyle={themeStyle}/>}
    </div>
  )
}

export default Header

