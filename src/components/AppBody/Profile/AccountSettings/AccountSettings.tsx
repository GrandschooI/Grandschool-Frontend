import React from 'react'

import s from './AccountSettings.module.scss'
import ChangeEmailForm from './ChangeMailForm/ChangeEmailForm'
import ChangePasswordForm from './ChangePasswordForm/ChangePasswordForm'

const AccountSettings = () => {
  return (
    <section className={s.settingsWrap}>
      <h2>Account Settings</h2>
      <ChangePasswordForm />
      <ChangeEmailForm />
    </section>
  )
}

export default AccountSettings
