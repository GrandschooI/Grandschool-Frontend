import React from 'react'

import ProfileImageForm from './ProfileImageForm/ProfileImageForm'
import s from './ProfileInfo.module.scss'
import ProfileInfoForm from './ProfileInfoForm/ProfileInfoForm'

const ProfileInfo = () => {
  return (
    <section className={s.profileInfoWrap}>
      <h2 className={s.title}>Personal information</h2>
      <div className={s.formWrap}>
        <ProfileInfoForm />
        <ProfileImageForm />
      </div>
    </section>
  )
}

export default ProfileInfo
