import React from 'react'
import s from './AccountSettings.module.scss'
import ChangePasswordForm from './ChangePasswordForm/ChangePasswordForm'
import ChangeEmailForm from './ChangeMailForm/ChangeEmailForm'

const AccountSettings = () => {
    return (
        <section className={s.settingsWrap}>
            <h2>Account Settings</h2>
            <ChangePasswordForm/>
            <ChangeEmailForm/>
        </section>
    )
}

export default AccountSettings