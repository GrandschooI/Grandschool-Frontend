import React from 'react'

import cn from 'classnames'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

import { getFontSize } from '../../../Redux/selectors/styleSelector'
import { getIsVerify } from '../../../Redux/selectors/userSelector'
import { useAppSelector } from '../../../utils/Hooks/useAppSelector'
import s from '../Header.module.scss'

export const useAccessToPersonaProfile = () => {
  const fontSize = useAppSelector(getFontSize)
  const userFromLocalstorage = window.localStorage.getItem('user')
  const isUserVerify = useAppSelector(getIsVerify)

  const toastErrorIsNotVerify = () => {
    toast.error('You have not confirmed verification. Please check your email')
  }

  return !!userFromLocalstorage && !isUserVerify ? (
    <>
      <NavLink
        className={cn(s.headerNavItem, s[fontSize ? fontSize : ''])}
        to={'/registration'}
        onClick={toastErrorIsNotVerify}
      >
        Twoje konto
      </NavLink>
    </>
  ) : (
    <>
      <NavLink className={cn(s.headerNavItem, s[fontSize ? fontSize : ''])} to={'/profile'}>
        Twoje konto
      </NavLink>
    </>
  )
}
