import React from 'react'
import s from './AccountSettings.module.scss'
import ChangePasswordForm from './ChangePasswordForm/ChangePasswordForm'
import ChangeEmailForm from './ChangeMailForm/ChangeEmailForm'
import {useAppSelector} from "../../../../utils/Hooks/useAppSelector";
import {getFontSize, getThemeStyle} from "../../../../Redux/selectors/styleSelector";
import cn from "classnames";

const AccountSettings = () => {
    const themeStyle = useAppSelector(getThemeStyle)
    const fontSize = useAppSelector(getFontSize)

    return (
        <section className={cn(s.settingsWrap, s[themeStyle ? themeStyle : ''], s[fontSize])}>
            <h2 className={s.title}>Account Settings</h2>
            <ChangePasswordForm/>
            <ChangeEmailForm/>
        </section>
    )
}

export default AccountSettings