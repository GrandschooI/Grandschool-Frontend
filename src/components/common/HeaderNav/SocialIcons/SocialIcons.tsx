import React from 'react'

import { nanoid } from '@reduxjs/toolkit'

import s from '../../../Header/Header.module.scss'
import FacebookIcon from '../../../SVGConponents/HeaderNav/FacebookIcon'
import InstagramIcon from '../../../SVGConponents/HeaderNav/InstagramIcon'
import YoutubeIcon from '../../../SVGConponents/HeaderNav/YoutubeIcon'

const socialIconLink = [
  {
    id: nanoid(),
    href: 'https://www.facebook.com/grandschool.poland',
    icon: <FacebookIcon />,
  },
  {
    id: nanoid(),
    href: 'https://www.youtube.com/channel/UC9EqiOq_ieypXdoXq8FLRkg',
    icon: <YoutubeIcon />,
  },
  {
    id: nanoid(),
    href: 'https://www.instagram.com/grandschool.poland',
    icon: <InstagramIcon />,
  },
]

export const SocialIcons = () => {
  const socialLayout = socialIconLink.map(el => {
    return (
      <li key={el.id} className={s.socialItem}>
        <a href={el.href} target="_blank" rel="noreferrer" className={s.socialLink}>
          {el.icon}
        </a>
      </li>
    )
  })

  return (
    <>
      <ul className={s.socialList}>{socialLayout}</ul>
    </>
  )
}
