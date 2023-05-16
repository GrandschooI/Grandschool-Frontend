import React, { ChangeEvent, useState } from 'react'

import cn from 'classnames'

import userPhoto from '../../../../../../assets/images/webp/userHiddenAvatar.webp'
import { Nullable } from '../../../../../../Redux/redux-toolkit-store'
import { getFontSize, getThemeStyle } from '../../../../../../Redux/selectors/styleSelector'
import { getUserPhotoLink } from '../../../../../../Redux/selectors/userSelector'
import { useAppSelector } from '../../../../../../utils/Hooks/useAppSelector'
import { activeThemeStyle } from '../../../../../../utils/scaffolding'
import Modal from '../../../../../Modal/Modal'

import CropImageModal from './cropImageModal/CropImageModal'
import s from './ProfileImageForm.module.scss'

const ProfileImageForm = () => {
  const userPhotoLink = useAppSelector(getUserPhotoLink)
  const [openCrop, setOpenCrop] = useState(false)
  const [file, setFile] = useState<null | File>(null)
  const [photoUrl, setPhotoUrl] = useState<Nullable<string>>(userPhotoLink)
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files?.length) {
      const file = e.target.files[0]

      if (file) {
        setFile(file)
        setPhotoUrl(URL.createObjectURL(file))
        setOpenCrop(true)
      }
    }
  }

  return (
    <section className={cn(s.profileImageForm, s[activeThemeStyle(themeStyle)], s[fontSize])}>
      <h3>Profile picture</h3>
      <img
        src={userPhotoLink ? userPhotoLink : userPhoto}
        alt="User Avatar"
        className={s.userPhoto}
      />
      <div className={s.inputControlsWrap}>
        <input
          onChange={handleFileChange}
          accept="image/png, image/jpeg, image/webp, image/gif"
          type="file"
          id={'userPhotoInput'}
          className={s.userPhotoInput}
        />
        <label htmlFor="userPhotoInput" className={cn(s.userPhotoLabel)}>
          Select file
        </label>
        <span className={s.userPhotoSizeInfo}>File size should not exceed 1 MB</span>
      </div>
      <Modal isOpen={openCrop} onSubmit={() => setOpenCrop(false)}>
        <CropImageModal
          photoUrl={photoUrl}
          setOpenCrop={setOpenCrop}
          setPhotoUrl={setPhotoUrl}
          setFile={setFile}
        />
      </Modal>
    </section>
  )
}

export default ProfileImageForm
