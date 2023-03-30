import React from 'react'

import cn from 'classnames'

import { getFontSize, getThemeStyle } from '../../../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../../../utils/Hooks/useAppSelector'

import ProfileImageForm from './ProfileImageForm/ProfileImageForm'
import s from './ProfileInfo.module.scss'
import ProfileInfoForm from './ProfileInfoForm/ProfileInfoForm'

const ProfileInfo = () => {
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)

  return (
    <section className={cn(s.profileInfoWrap, s[themeStyle ? themeStyle : ''], s[fontSize])}>
      <h2 className={s.title}>Personal information</h2>
      <div className={s.formWrap}>
        <ProfileInfoForm />
        <ProfileImageForm />
      </div>
    </section>
  )
}

export default ProfileInfo
