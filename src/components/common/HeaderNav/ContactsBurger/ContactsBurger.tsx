import React from 'react'

import s from '../../../Header/Header.module.scss'
import AddressIcon from '../../../SVGConponents/HeaderNav/AddressIcon'
import MailIcon from '../../../SVGConponents/HeaderNav/MailIcon'

export const ContactsBurger = () => {
  return (
    <div className={s.burgerContactWrap}>
      <div className={s.row}>
        <AddressIcon />
        <address>Kraków, Polska</address>
      </div>
      <div className={s.row}>
        <MailIcon />
        <a href="mailto:contact@grandschool.pl" rel="noreferrer">
          contact@grandschool.pl
        </a>
      </div>
    </div>
  )
}
