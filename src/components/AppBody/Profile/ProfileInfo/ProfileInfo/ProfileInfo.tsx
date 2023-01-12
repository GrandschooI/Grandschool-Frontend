import React from 'react'
import s from './ProfileInfo.module.scss'
import ProfileInfoFormContainer from './ProfileInfoForm/ProfileInfoFormContainer';
import ProfileImageForm from './ProfileImageForm/ProfileImageForm';

const ProfileInfo = () => {
    return (
        <section className={s.profileInfoWrap}>
            <h2 className={s.title}>Personal information</h2>
            <div className={s.formWrap}>
                <ProfileInfoFormContainer />
                <ProfileImageForm/>
            </div>
        </section>
    )
}

export default ProfileInfo