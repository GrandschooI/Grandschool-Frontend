import React from 'react'

import cn from 'classnames'
import { NavLink } from 'react-router-dom'

import {
  getFontSize,
  getImgAvailability,
  getThemeStyle,
} from '../../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../../utils/Hooks/useAppSelector'

import s from './CallToAction.module.scss'

const CallToAction = () => {
  const images = useAppSelector(getImgAvailability)
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)

  const withoutImgClassName = images ? '' : 'withoutImg'

  return (
    <section
      className={cn(
        s.callToActionBGWrap,
        s[themeStyle ? themeStyle : ''],
        s[withoutImgClassName],
        s[fontSize]
      )}
    >
      <div className={cn(s.callToAction, 'container', 'callToAction')}>
        <h1 className={s.mainTitle}>
          Online kursy komputerowe <br /> dla seniorów{' '}
          <span className={s.firmNameInMainTitle}>GRANDSCHOOL</span>
        </h1>
        <p className={s.slogan}>
          Новые технологии для взрослого поколения перестали быть их ночным кошмаром
        </p>
        <NavLink to="/course" className={cn(s.mainToCourseLink, 'inverseBtn')}>
          Zacząć naukę
        </NavLink>
      </div>
    </section>
  )
}

export default CallToAction
