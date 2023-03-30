import React from 'react'

import cn from 'classnames'
import { NavLink } from 'react-router-dom'

import {
  getFontSize,
  getImgAvailability,
  getThemeStyle,
} from '../../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../../utils/Hooks/useAppSelector'

import s from './AsideItem.module.scss'

const AsideItemWithoutTopics: React.FC<PropsType> = ({ location, itemLink, itemTitle }) => {
  const fontSize = useAppSelector(getFontSize)

  return (
    <NavLink
      to={itemLink}
      className={cn(s.asideLink, location === itemLink ? s.activeItem : '', s[fontSize])}
    >
      <span className={s.title}>{itemTitle}</span>
    </NavLink>
  )
}

export default AsideItemWithoutTopics

type PropsType = {
  location: string
  itemLink: string
  itemTitle: string
}
