import React from 'react'
import s from './ProfileImageForm.module.scss'
import userPhoto from '../../../../../../assets/images/webp/userHiddenAvatar.webp'
import cn from 'classnames';
import {Nullable} from '../../../../../../Redux/redux-store';
import {useDispatch} from 'react-redux';
import {setUserPhotoThunkCreator} from '../../../../../../Redux/reducers/userReducer';
import {useAppSelector} from '../../../../../../utils/Hooks/useAppSelector';
import {getUserPhotoLink} from '../../../../../../Redux/selectors/userSelector';

const ProfileImageForm = () => {

  const dispatch = useDispatch()
  const userId = useAppSelector(state => state.userData.currentUser.id) as number
  const userPhotoLink = useAppSelector(getUserPhotoLink)
  console.log('photo:', userPhotoLink)
  const token = localStorage.getItem('token') as string
  console.log(token)
  console.log(userId)
  const onFileLoad = (e: any) => {
    if (e.target.files.length) {
      dispatch(setUserPhotoThunkCreator(userId, token, e.target.files[0]))
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
        <button type="submit" className={cn(s.continue, 'submitBtn')}>
          Wyślij
        </button>
      </div>
    </section>
  )
}

export default ProfileImageForm

