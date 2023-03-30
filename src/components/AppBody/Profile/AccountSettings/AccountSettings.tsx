import React from 'react'

import cn from 'classnames'

import { getFontSize, getThemeStyle } from '../../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../../utils/Hooks/useAppSelector'

import s from './AccountSettings.module.scss'
import ChangeEmailForm from './ChangeMailForm/ChangeEmailForm'
import ChangePasswordForm from './ChangePasswordForm/ChangePasswordForm'

const AccountSettings = () => {
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)

  return (
    <section className={cn(s.settingsWrap, s[themeStyle ? themeStyle : ''], s[fontSize])}>
      <h2 className={s.title}>Account Settings</h2>
      <ChangePasswordForm />
      <ChangeEmailForm />
    </section>
  )
}

export default AccountSettings
