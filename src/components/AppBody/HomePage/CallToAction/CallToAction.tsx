import React from 'react'

import cn from 'classnames'
import { NavLink } from 'react-router-dom'

import {
  getFontSize,
  getImgAvailability,
  getThemeStyle,
} from '../../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../../utils/Hooks/useAppSelector'
import { activeThemeStyle } from '../../../../utils/scaffolding'

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
        s[activeThemeStyle(themeStyle)],
        s[withoutImgClassName],
        s[fontSize]
      )}
    >
      <div className={cn(s.callToAction, 'container', 'callToAction')}>
        <h1 className={s.mainTitle}>
          <span className={s.firmNameInMainTitle}>GRANDSCHOOL</span>
          <br />
          Przewodnik po nowoczesnym świecie
        </h1>
        <p className={s.slogan}>
          Nasze kursy online pomagają seniorom dostosować się do współczesnej rzeczywistości.
        </p>
        <NavLink to="/course" className={cn(s.mainToCourseLink, 'inverseBtn')}>
          Zacząć naukę
        </NavLink>
      </div>
    </section>
  )
}

export default CallToAction
