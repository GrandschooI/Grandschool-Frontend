import React from 'react'

import cn from 'classnames'

import { getFontSize, getThemeStyle } from '../../../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../../../utils/Hooks/useAppSelector'
import Preloader from '../../../../utils/Preloader/Preloader'

import ProfileImageForm from './ProfileImageForm/ProfileImageForm'
import s from './ProfileInfo.module.scss'
import ProfileInfoForm from './ProfileInfoForm/ProfileInfoForm'

const ProfileInfo = () => {
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)

  const userFromLocalstorage = JSON.parse(window.localStorage.getItem('user') as string)

  const initialProfileData = {
    currentUserName: userFromLocalstorage?.name,
    currentUserCountry: userFromLocalstorage?.country,
    currentUserCity: userFromLocalstorage?.city,
    currentUserBirthday: new Date(userFromLocalstorage?.birthday),
    currentUserDescription: userFromLocalstorage?.description,
    currentUserGender: userFromLocalstorage?.gender,
  }

  if (!userFromLocalstorage) return <Preloader />

  return (
    <section className={cn(s.profileInfoWrap, s[themeStyle ? themeStyle : ''], s[fontSize])}>
      <h2 className={s.title}>Personal information</h2>
      <div className={s.formWrap}>
        <ProfileInfoForm
          initialProfileData={initialProfileData}
          key={JSON.stringify(initialProfileData)}
        />
        <ProfileImageForm />
      </div>
    </section>
  )
}

export default ProfileInfo
