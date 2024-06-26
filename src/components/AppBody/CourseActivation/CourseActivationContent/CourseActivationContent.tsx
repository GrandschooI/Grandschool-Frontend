import React from 'react'

import cn from 'classnames'

import { activeThemeStyle } from '../../../../utils/scaffolding'

import s from './CourseActivationContent.module.scss'
import { useCourseActivation } from './useCourseActivation'

type PropsType = {
  className: React.CSSProperties | string
}
export const CourseActivationContent: React.FC<Partial<PropsType>> = ({ className = '' }) => {
  const { otp, themeStyle, fontSize, onKeyDownHandle, onChangeHandle, inputRef, activeOtpIndex } =
    useCourseActivation()

  const otpLayout = otp.map((value, index) => (
    <input
      key={index}
      ref={activeOtpIndex === index ? inputRef : null}
      type="number"
      value={otp[index]}
      onChange={event => onChangeHandle(event, index)}
      onKeyDown={event => onKeyDownHandle(event, index)}
    />
  ))

  return (
    <div
      className={cn(
        `${s.courseActivationContent} ${className}`,
        s[activeThemeStyle(themeStyle)],
        activeThemeStyle(themeStyle),
        fontSize
      )}
    >
      <p className={s.bodyDescription}>
        Чтобы активировать курс, вам необходимо ниже ввести 5-значный пароль из e-mail сообщения:
      </p>

      <div className={s.bodyBoxCode}>{otpLayout}</div>

      <button type="button" className="submitBtn">
        Активировать
      </button>
    </div>
  )
}
