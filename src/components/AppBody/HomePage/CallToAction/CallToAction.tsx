import React from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'
import './CallToActionGlobal.scss'
import BlindButtonContainer from '../../../utils/BlindButton/BlindButtonContainer'
import {Nullable} from '../../../../Redux/redux-store'
import s from './CallToAction.module.scss'

type propsType = {
    blindMode: boolean
    fontSize: string
    themeStyle: Nullable<string>
    images: boolean
    isLoaded?: boolean
    isOptionsOpen: boolean
}

const CallToAction: React.FC<propsType> = ({images, themeStyle, fontSize}) => {
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
