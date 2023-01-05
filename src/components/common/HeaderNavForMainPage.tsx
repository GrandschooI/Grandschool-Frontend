import React from 'react'
import cn from 'classnames'
import {NavLink} from 'react-router-dom'
import s from '../Header/Header.module.scss'
import MobileAccountIcon from '../SVGConponents/HeaderNav/MobileAccountIcon'
import AddressIcon from '../SVGConponents/HeaderNav/AddressIcon'
import MailIcon from '../SVGConponents/HeaderNav/MailIcon'
import FacebookIcon from '../SVGConponents/HeaderNav/FacebookIcon'
import YoutubeIcon from '../SVGConponents/HeaderNav/YoutubeIcon'
import InstagramIcon from '../SVGConponents/HeaderNav/InstagramIcon'

const HeaderNavForMainPage = () => {
  return (
    <nav className={cn(s.headerNav)}>
      <NavLink className={cn(s.headerNavLink, s.mobileAccountLink)} to='/login'>
        <MobileAccountIcon/>
        <span className={s.headerNavLinkLabel}>Twoje konto</span>
      </NavLink>
      <NavLink to='/about-us/project' className={s.headerNavLink}>
        <span className={s.headerNavLinkLabel}>O nas</span>
      </NavLink>
      <NavLink to='/course' className={s.headerNavLink}>
        <span className={s.headerNavLinkLabel}>Zajęcia</span>
      </NavLink>
      <NavLink to='/teachers' className={s.headerNavLink}>
        <span className={s.headerNavLinkLabel}>Nauczycielowi</span>
      </NavLink>
      <NavLink to='/info/websites' className={s.headerNavLink}>
        <span className={s.headerNavLinkLabel}>Więcej</span>
      </NavLink>

      <div className={s.burgerContactWrap}>
        <div className={s.row}>
          <AddressIcon/>
          <address>Kraków, Polska</address>
        </div>
        <div className={s.row}>
          <MailIcon/>
          <a href="mailto:contact@grandschool.pl" rel="noreferrer">contact@grandschool.pl</a>
        </div>
      </div>

      <ul className={s.socialList}>
        <li className={s.socialItem}>
          <a href="https://www.facebook.com/grandschool.poland"
            target="_blank" rel="noreferrer"
            className={s.socialLink}>
            <FacebookIcon/>
          </a>
        </li>
        <li className={s.socialItem}>
          <a href="https://www.youtube.com/channel/UC9EqiOq_ieypXdoXq8FLRkg" target="_blank" rel="noreferrer"
            className={s.socialLink}>
            <YoutubeIcon/>
          </a>
        </li>
        <li className={s.socialItem}>
          <a href="https://www.instagram.com/grandschool.poland" target="_blank" rel="noreferrer" className={s.socialLink}>
            <InstagramIcon/>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderNavForMainPage