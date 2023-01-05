import React from 'react'
import ProfileImageFormContainer from './ProfileImageForm/ProfileImageFormContainer';
import s from './ProfileInfo.module.scss'
import ProfileInfoFormContainer from './ProfileInfoForm/ProfileInfoFormContainer';

const ProfileInfo = () => {
    return (
        <section className={s.profileInfoWrap}>
            <h2 className={s.title}>Personal information</h2>
            <div className={s.formWrap}>
                <ProfileInfoFormContainer />
                <ProfileImageFormContainer/>
            </div>
        </section>
    )
}

export default ProfileInfo