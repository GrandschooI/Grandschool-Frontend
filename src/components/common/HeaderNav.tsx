import React from 'react'
import cn from 'classnames'
import {NavLink, useLocation} from 'react-router-dom'
import s from '../Header/Header.module.scss'
import {Nullable} from "../../Redux/redux-toolkit-store";

const HeaderNav: React.FC<PropsType> = ({themeStyle, fontSize}) => {
    const location: string = useLocation().pathname
    return (
        <div className={cn(s.notMainPageWrapper, s[themeStyle ? themeStyle : ''], s[fontSize ? fontSize : ''])}>
            <div className={'container'}>
                <nav className={cn(s.headerNav, s.notMainPage)}>
                    <NavLink to='/' className={s.headerNavLink}>
                        <span className={s.headerNavLinkLabel}>Strona główna</span>
                    </NavLink>
                    <NavLink to='/about-us/project'
                             className={cn(s.headerNavLink, location.includes('/about-us') ? s.headerActiveNavLink : '')}>
                        <span className={s.headerNavLinkLabel}>O nas</span>
                    </NavLink>
                    <NavLink to='/course'
                             className={cn(s.headerNavLink, location.includes('/course') ? s.headerActiveNavLink : '')}>
                        <span className={s.headerNavLinkLabel}>Zajęcia</span>
                    </NavLink>
                    <NavLink to='/teachers'
                             className={cn(s.headerNavLink, location.includes('/teachers') ? s.headerActiveNavLink : '')}>
                        <span className={s.headerNavLinkLabel}>Nauczycielowi</span>
                    </NavLink>
                    <NavLink to='/info'
                             className={cn(s.headerNavLink, location.includes('/websites') ? s.headerActiveNavLink : '')}>
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
}