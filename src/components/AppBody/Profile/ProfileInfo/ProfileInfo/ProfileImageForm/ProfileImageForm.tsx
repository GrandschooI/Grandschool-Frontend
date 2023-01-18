import React, {ChangeEvent, useState} from 'react'
import s from './ProfileImageForm.module.scss'
import userPhoto from '../../../../../../assets/images/webp/userHiddenAvatar.webp'
import cn from 'classnames';
import {useAppSelector} from '../../../../../../utils/Hooks/useAppSelector';
import {getUserPhotoLink} from '../../../../../../Redux/selectors/userSelector';
import Modal from '../../../../../Modal/Modal';
import CropImageModal from './cropImageModal/CropImageModal';
import {Nullable} from '../../../../../../Redux/redux-store';

const ProfileImageForm = () => {

  const userPhotoLink = useAppSelector(getUserPhotoLink)

  const [openCrop, setOpenCrop] = useState(false)
  const [file, setFile] = useState<null | File>(null)
  const [photoUrl, setPhotoUrl] = useState<Nullable<string>>(userPhotoLink)


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
    <section className={s.profileImageForm}>
      <h3>Profile picture</h3>
      <img src={userPhotoLink ? userPhotoLink : userPhoto} alt="User Avatar" className={s.userPhoto}/>
      <div className={s.inputControlsWrap}>
        <input onChange={handleFileChange} accept="image/png, image/jpeg, image/webp, image/gif" type="file"
               id={'userPhotoInput'} className={s.userPhotoInput}/>
        <label htmlFor="userPhotoInput" className={cn(s.userPhotoLabel, 'inverseBtn')}>Select file</label>
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