import React from 'react'

import '../../style.scss'
import './HeaderGlobal.scss'
import cn from 'classnames'

import { getImgAvailability } from '../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../utils/Hooks/useAppSelector'
import { activeThemeStyle } from '../../utils/scaffolding'
import HeaderNav from '../common/HeaderNav/HeaderNav'
import { LogoGrandSchool } from '../common/LogoGrandSchool/LogoGrandSchool'
import SearchField from '../common/SearchField'
import { ArrowIcon } from '../SVGConponents/BlindButton/ArrowIcon'
import BurgerMenuIcon from '../SVGConponents/HeaderNav/BurgerMenuIcon'
import BlindButton from '../utils/BlindButton/BlindButton'

import BlindModeOptions from './BlindModeOptions/BlindModeOptions'
import s from './Header.module.scss'
import { useAccessToPersonaProfile } from './hooks/useAccessToPersonaProfile'
import { useHeaderLogic } from './hooks/useHeaderLogic'

const Header: React.FC<propsType> = ({ isHeaderChange }) => {
  const images = useAppSelector(getImgAvailability)
  const {
    themeStyle,
    fontSize,
    toggleBlindModeHandler,
    optionsModeHandler,
    onBurgerClickHandler,
    toggleBurgerMenu,
    isBurgerActive,
    blindMode,
    isOptionsOpen,
  } = useHeaderLogic()

  const ProfileLink = useAccessToPersonaProfile()

  return (
    <div
      className={cn(
        s.header,
        s[activeThemeStyle(themeStyle)],
        'header',
        s[fontSize],
        s[!isHeaderChange ? 'subPageHeader' : '']
      )}
    >
      <BlindModeOptions />
      <div className={cn('container', s[isBurgerActive ? 'active' : ''])}>
        <div className={cn(s.headerTop)}>
          <LogoGrandSchool />
          {!isHeaderChange && <SearchField themeStyle={themeStyle} />}
          {isHeaderChange && (
            <HeaderNav
              toggleBurgerMenu={toggleBurgerMenu}
              isHeaderChange={isHeaderChange}
              themeStyle={themeStyle}
              fontSize={fontSize}
            />
          )}
          {blindMode && (
            <button
              onClick={optionsModeHandler}
              className={cn(s.closeBlindOptions, s[isOptionsOpen ? '' : 'revert'])}
            >
              <ArrowIcon />
            </button>
          )}

          <div className={s.headerBtnWrap}>
            <BlindButton
              switchBlindModeAC={toggleBlindModeHandler}
              themeStyle={themeStyle}
              blindMode={blindMode}
              fontSize={fontSize}
            />

            {ProfileLink}
            <button className={s.burgerBtn} onClick={onBurgerClickHandler}>
              <BurgerMenuIcon isBurgerActive={isBurgerActive} themeStyle={themeStyle} />
            </button>
          </div>
        </div>
      </div>
      <div className={cn(s[isBurgerActive ? 'active' : ''])}>
        {!isHeaderChange && (
          <HeaderNav
            isHeaderChange={isHeaderChange}
            toggleBurgerMenu={toggleBurgerMenu}
            fontSize={fontSize}
            themeStyle={themeStyle}
          />
        )}
      </div>
    </div>
  )
}

export default Header

type propsType = {
  isHeaderChange: boolean
}
