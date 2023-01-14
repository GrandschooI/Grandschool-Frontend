import React, {ChangeEvent} from 'react'
import s from './ProfileImageForm.module.scss'
import userPhoto from '../../../../../../assets/images/webp/userHiddenAvatar.webp'
import cn from 'classnames';
import {useDispatch} from 'react-redux';
import {setUserPhotoThunkCreator} from '../../../../../../Redux/reducers/userReducer';
import {useAppSelector} from '../../../../../../utils/Hooks/useAppSelector';
import {getUserPhotoLink} from '../../../../../../Redux/selectors/userSelector';

const ProfileImageForm = () => {

  const dispatch = useDispatch()

  const userId = useAppSelector(state => state.userData.currentUser.id) as number
  const userPhotoLink = useAppSelector(getUserPhotoLink)
  const token = localStorage.getItem('token') as string

  const onFileLoad = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files?.length) {
      dispatch(setUserPhotoThunkCreator(userId,token, e.target.files[0]))
    }
  }

  return (
    <section className={s.profileImageForm}>
      <h3>Profile picture</h3>
      <img src={userPhotoLink ? userPhotoLink : userPhoto} alt="User Avatar" className={s.userPhoto}/>
      <div className={s.inputControlsWrap}>
        <input onChange={onFileLoad} accept="image/png, image/jpeg, image/webp, image/gif" type="file"
               id={'userPhotoInput'} className={s.userPhotoInput}/>
        <label htmlFor="userPhotoInput" className={cn(s.userPhotoLabel, 'inverseBtn')}>Select file</label>
        <span className={s.userPhotoSizeInfo}>File size should not exceed 1 MB</span>
      </div>
    </section>
  )
}

export default ProfileImageForm

