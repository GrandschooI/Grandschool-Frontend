import React from 'react'

import cn from 'classnames'

import { getFontSize, getThemeStyle } from '../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../utils/Hooks/useAppSelector'
import { activeThemeStyle } from '../../../utils/scaffolding'
import Popup from '../../common/PopupSection/Popup/Popup'

import s from './../../common/PopupSection/PopupSection.module.scss'
import { CourseActivationContent } from './CourseActivationContent/CourseActivationContent'

const CourseActivation = () => {
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)

  return (
    <section
      className={cn(
        s.popupSectionWrapper,
        'container',
        s[activeThemeStyle(themeStyle)],
        s[fontSize]
      )}
    >
      <h2 className={s.title}>Активация курса</h2>
      <Popup className={s.center}>
        <CourseActivationContent />
      </Popup>
    </section>
  )
}

export default CourseActivation
