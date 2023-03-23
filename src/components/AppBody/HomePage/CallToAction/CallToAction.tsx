import React from 'react'

import cn from 'classnames'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import './CallToActionGlobal.scss'
import { switchBlindMode } from '../../../../Redux/reducers/styleSlice'
import {
  getFontSize,
  getImgAvailability,
  getStyleMode,
  getThemeStyle,
} from '../../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../../utils/Hooks/useAppSelector'
import BlindButton from '../../../utils/BlindButton/BlindButton'

import s from './CallToAction.module.scss'

const CallToAction = () => {
  const dispatch = useDispatch()

  const images = useAppSelector(getImgAvailability)
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)
  const blindMode = useAppSelector(getStyleMode)

  const withoutImgClassName = images ? '' : 'withoutImg'

  const toggleBlindModeHandler = () => {
    dispatch(switchBlindMode({ blindMode: !blindMode }))
  }

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
        <NavLink to="/course" className={s.mainToCourseLink}>
          Zacząć naukę
        </NavLink>
        <BlindButton
          fontSize={fontSize}
          themeStyle={themeStyle}
          blindMode={blindMode}
          switchBlindModeAC={toggleBlindModeHandler}
        />
      </div>
    </section>
  )
}

export default CallToAction
