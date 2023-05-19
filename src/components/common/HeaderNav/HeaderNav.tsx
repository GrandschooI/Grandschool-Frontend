import React, { FC } from 'react'

import cn from 'classnames'
import { NavLink } from 'react-router-dom'

import { Nullable } from '../../../Redux/redux-toolkit-store'
import { activeFontSize, activeThemeStyle } from '../../../utils/scaffolding'
import s from '../../Header/Header.module.scss'
import MobileAccountIcon from '../../SVGConponents/HeaderNav/MobileAccountIcon'

import { navLinkData } from './constants/nav-link-data'
import { ContactsBurger } from './ContactsBurger/ContactsBurger'
import { SocialIcons } from './SocialIcons/SocialIcons'

interface PropsType {
  themeStyle: Nullable<string>
  fontSize: Nullable<string>
  toggleBurgerMenu: () => void
  isHeaderChange: boolean
}

const HeaderNav: FC<PropsType> = ({
  toggleBurgerMenu,
  themeStyle = '',
  fontSize = '',
  isHeaderChange,
}) => {
  const navLinks = navLinkData?.map(({ id, nameLink, to }) => (
    <NavLink
      onClick={toggleBurgerMenu}
      to={to}
      key={id}
      className={cn(s.headerNavLink)}
      activeClassName={s.headerActiveNavLink}
    >
      <span className={s.headerNavLinkLabel}>{nameLink}</span>
    </NavLink>
  ))

  const mobileAccountLink = (
    <NavLink
      className={cn(s.headerNavLink, s.mobileAccountLink)}
      to="/login"
      onClick={toggleBurgerMenu}
    >
      <MobileAccountIcon />
      <span className={s.headerNavLinkLabel}>Twoje konto</span>
    </NavLink>
  )

  const mainNavLinks = (
    <>
      {mobileAccountLink}
      {navLinks}
      <ContactsBurger />
      <SocialIcons />
    </>
  )

  const notMainNavLinks = (
    <div
      className={cn(
        s.notMainPageWrapper,
        s[activeThemeStyle(themeStyle)],
        s[activeFontSize(fontSize)]
      )}
    >
      <div className="container">
        <nav className={cn(s.headerNav, s.notMainPage)}>
          <NavLink to="/" className={s.headerNavLink} onClick={toggleBurgerMenu}>
            <span className={s.headerNavLinkLabel}>Strona główna</span>
          </NavLink>
          {navLinks}
          <ContactsBurger />
          <SocialIcons />
        </nav>
      </div>
    </div>
  )

  const navPageLayout = isHeaderChange ? (
    <nav className={cn(s.headerNav, activeThemeStyle(themeStyle), activeFontSize(fontSize))}>
      {mainNavLinks}
    </nav>
  ) : (
    notMainNavLinks
  )

  return <>{navPageLayout}</>
}

export default HeaderNav
