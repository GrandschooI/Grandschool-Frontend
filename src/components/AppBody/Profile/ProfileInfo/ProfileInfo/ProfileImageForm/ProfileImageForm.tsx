import React from 'react'
import s from './ProfileImageForm.module.scss'
import userPhoto from '../../../../../../assets/images/webp/userHiddenAvatar.webp'
import cn from "classnames";
import {Nullable} from "../../../../../../Redux/redux-store";

const ProfileImageForm:React.FC<propsType> = ({userPhotoLink, setUserPhotoThunkCreator}) => {
    const onFileLoad = (e: any) => {
        if (e.target.files.length) {
            setUserPhotoThunkCreator(e.target.files[0])
        }
    }
    return (
        <section className={s.profileImageForm}>
            <h3>Profile picture</h3>
            <img src={userPhotoLink ? userPhotoLink : userPhoto} alt="User Avatar" className={s.userPhoto}/>
            <div className={s.inputControlsWrap}>
                <input onChange={onFileLoad} accept="image/png, image/jpeg, image/webp, image/gif" type="file" id={'userPhotoInput'} className={s.userPhotoInput}/>
                <label htmlFor="userPhotoInput" className={cn(s.userPhotoLabel, 'inverseBtn')}>Select file</label>
                <span className={s.userPhotoSizeInfo}>File size should not exceed 1 MB</span>
                <button type="submit" className={cn(s.continue, 'submitBtn')}>
                    Wyślij
                </button>
            </div>
        </section>
    )
}

export default ProfileImageForm

type propsType = {
    userPhotoLink: Nullable<string>
    setUserPhotoThunkCreator: any
}