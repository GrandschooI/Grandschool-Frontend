import React, { FC } from 'react'

import cn from 'classnames'
import { NavLink } from 'react-router-dom'

import { Nullable } from '../../../Redux/redux-toolkit-store'
import s from '../../Header/Header.module.scss'
import MobileAccountIcon from '../../SVGConponents/HeaderNav/MobileAccountIcon'

import { navLinkData } from './constants/nav-link-data'
import { ContactsBurger } from './ContactsBurger/ContactsBurger'
import { SocialIcons } from './SocialIcons/SocialIcons'

interface PropsType {
  themeStyle: Nullable<string>
  fontSize: Nullable<string>
  callback: () => void
  isHeaderChange: boolean
}

const HeaderNavForMainPage: FC<PropsType> = ({
  callback,
  themeStyle,
  fontSize,
  isHeaderChange,
}) => {
  const navWithSearch = navLinkData?.map(el => {
    const { id, nameLink, to } = el

    return (
      <NavLink
        onClick={callback}
        to={to}
        key={id}
        className={cn(s.headerNavLink)}
        activeClassName={s.headerActiveNavLink}
      >
        <span className={s.headerNavLinkLabel}>{nameLink}</span>
      </NavLink>
    )
  })
  const navWithoutSearch = navLinkData?.map(el => {
    const { id, nameLink, to } = el

    return (
      <NavLink
        to={to}
        key={id}
        className={s.headerNavLink}
        activeClassName={s.headerActiveNavLink}
        onClick={callback}
      >
        <span className={s.headerNavLinkLabel}>{nameLink}</span>
      </NavLink>
    )
  })

  const navPageLayout = isHeaderChange ? (
    <>
      <nav
        className={cn(s.headerNav, s[themeStyle ? themeStyle : ''], s[fontSize ? fontSize : ''])}
      >
        <NavLink
          className={cn(s.headerNavLink, s.mobileAccountLink)}
          to="/login"
          onClick={callback}
        >
          <MobileAccountIcon />
          <span className={s.headerNavLinkLabel}>Twoje konto</span>
        </NavLink>
        {navWithSearch}
        <ContactsBurger />
        <SocialIcons />
      </nav>
    </>
  ) : (
    <div
      className={cn(
        s.notMainPageWrapper,
        s[themeStyle ? themeStyle : ''],
        s[fontSize ? fontSize : '']
      )}
    >
      <div className={'container'}>
        <nav className={cn(s.headerNav, s.notMainPage)}>
          <NavLink to="/" className={s.headerNavLink} onClick={callback}>
            <span className={s.headerNavLinkLabel}>Strona główna</span>
          </NavLink>
          {navWithoutSearch}
          <ContactsBurger />
          <SocialIcons />
        </nav>
      </div>
    </div>
  )

  return <>{navPageLayout}</>
}

export default HeaderNavForMainPage
