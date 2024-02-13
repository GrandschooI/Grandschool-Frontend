import React from 'react'

import cn from 'classnames'
import { NavLink } from 'react-router-dom'

import { getFontSize, getThemeStyle } from '../../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../../utils/Hooks/useAppSelector'
import { activeThemeStyle } from '../../../../utils/scaffolding'

import s from './PaymentSuccess.module.scss'

export const PaymentSuccess: React.FC = () => {
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)

  return (
    <div
      className={cn(
        s.paymentSuccessContent,
        s[activeThemeStyle(themeStyle)],
        activeThemeStyle(themeStyle),
        s[fontSize],
        fontSize
      )}
    >
      <p className={s.successMessage}>Оплата прошла успешно!</p>
      <p className={s.successCheckEmail}>
        Проверьте письмо на вашей почте и следуйте инструкциям для активации курса!
      </p>
      <NavLink to="/" className="submitBtn">
        На главную
      </NavLink>
    </div>
  )
}
