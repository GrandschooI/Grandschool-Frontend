import React from 'react'
import {NavLink} from 'react-router-dom'
import cn from 'classnames'
import './CallToActionGlobal.scss'
import BlindButtonContainer from '../../../utils/BlindButton/BlindButtonContainer'
import s from './CallToAction.module.scss'
import {useAppSelector} from '../../../../utils/Hooks/useAppSelector';
import {getFontSize, getImgAvailability, getThemeStyle} from '../../../../Redux/selectors/styleSelector';


const CallToAction = () => {

  const images = useAppSelector(getImgAvailability)
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)

  const withoutImgClassName = images ? '' : 'withoutImg'
  return (
    <section className={cn(s.callToActionBGWrap, s[(themeStyle ? themeStyle : '')], s[withoutImgClassName], s[fontSize])}>
      <div className={cn(s.callToAction, 'container', 'callToAction')}>
        <h1 className={s.mainTitle}>Online kursy komputerowe <br/> dla seniorów <span className={s.firmNameInMainTitle}>GRANDSCHOOL</span></h1>
        <p className={s.slogan}>Новые технологии для взрослого поколения перестали быть их ночным кошмаром</p>
        <NavLink to='/course' className={s.mainToCourseLink}>Zacząć naukę</NavLink>
        <BlindButtonContainer/>
      </div>
    </section>
  )
}

export default CallToAction
