import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'

import cn from 'classnames'

import { getFontSize, getThemeStyle } from '../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../utils/Hooks/useAppSelector'
import Popup from '../../common/Popup/Popup'

import s from './CourseActivation.module.scss'

const CourseActivation = () => {
  const [otp, setOtp] = useState<string[]>(new Array(5).fill(''))
  const [activeOtpIndex, setActiveOtpIndex] = useState<number>(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)

  const onChangeHandle = (event: ChangeEvent<HTMLInputElement>, index: number): void => {
    const { value } = event.currentTarget
    const newOtp = [...otp]

    newOtp[index] = value.substring(value.length - 1)
    setOtp(newOtp)
    setActiveOtpIndex(value ? index + 1 : index - 1)
  }

  const onKeyDownHandle = (event: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === 'Backspace') {
      setActiveOtpIndex(index - 1)
    }
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [activeOtpIndex])

  return (
    <div
      className={cn(
        s.courseActivationBody,
        'container',
        s[themeStyle ? themeStyle : ''],
        s[fontSize]
      )}
    >
      <h2 className={s.courseActivation}>Активация курса</h2>
      <Popup>
        <p className={s.bodyDescription}>
          Чтобы активировать курс, вам необходимо ниже ввести 5-значный пароль из e-mail сообщения:
        </p>
        <div className={s.bodyBoxCode}>
          {otp.map((value, index) => (
            <input
              key={index}
              ref={activeOtpIndex === index ? inputRef : null}
              type="number"
              value={otp[index]}
              onChange={event => onChangeHandle(event, index)}
              onKeyDown={event => onKeyDownHandle(event, index)}
            />
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <button type="button" className={s.btn}>
            Активировать
          </button>
        </div>
      </Popup>
    </div>
  )
}

export default CourseActivation
