import React from 'react'

import cn from 'classnames'
import { NavLink, useLocation } from 'react-router-dom'

import { Nullable } from '../../Redux/redux-toolkit-store'
import s from '../Header/Header.module.scss'

const HeaderNav: React.FC<PropsType> = ({ themeStyle, fontSize, callback }) => {
  const location: string = useLocation().pathname

  return (
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
          <NavLink
            to="/about-us/project"
            onClick={callback}
            className={cn(
              s.headerNavLink,
              location.includes('/about-us') ? s.headerActiveNavLink : ''
            )}
          >
            <span className={s.headerNavLinkLabel}>O nas</span>
          </NavLink>
          <NavLink
            onClick={callback}
            to="/course"
            className={cn(
              s.headerNavLink,
              location.includes('/course') ? s.headerActiveNavLink : ''
            )}
          >
            <span className={s.headerNavLinkLabel}>Zajęcia</span>
          </NavLink>
          <NavLink
            onClick={callback}
            to="/teachers"
            className={cn(
              s.headerNavLink,
              location.includes('/teachers') ? s.headerActiveNavLink : ''
            )}
          >
            <span className={s.headerNavLinkLabel}>Nauczycielowi</span>
          </NavLink>
          <NavLink
            onClick={callback}
            to="/info"
            className={cn(
              s.headerNavLink,
              location.includes('/websites') ? s.headerActiveNavLink : ''
            )}
          >
            <span className={s.headerNavLinkLabel}>Więcej</span>
          </NavLink>
        </nav>
      </div>
    </div>
  )
}

export default HeaderNav

type PropsType = {
  themeStyle: Nullable<string>
  fontSize: Nullable<string>
  callback: () => void
}
