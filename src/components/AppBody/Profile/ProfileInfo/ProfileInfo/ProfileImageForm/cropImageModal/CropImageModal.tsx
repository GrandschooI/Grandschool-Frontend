import React, {ChangeEvent, useState} from 'react';
import Cropper from 'react-easy-crop';
import getCroppedImg from '../utils/cropImage';
import {errorHandler, setUserPhotoThunkCreator} from '../../../../../../../Redux/reducers/userReducer';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../../../../../../utils/Hooks/useAppSelector';
import {Area, Point} from './types/cropImageTypes';
import {Nullable} from '../../../../../../../Redux/redux-store';
import s from './сropImageModal.module.scss'

type PropsType = {
  photoUrl: any
  setOpenCrop: (open: boolean) => void
  setPhotoUrl: (photoURL: Nullable<string>) => void
  setFile: (file: File) => void
}


const CropImageModal: React.FC<PropsType> = ({photoUrl, setOpenCrop, setPhotoUrl, setFile}) => {

  const userId = useAppSelector(state => state.userData.currentUser.id) as number
  const token = localStorage.getItem('token') as string

  const [crop, setCrop] = useState<Point>({x: 0, y: 0})
  const [zoom, setZoom] = useState(1)
  const [rotation, setRotation] = useState(0)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)
  const dispatch = useDispatch()

  const cropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }
  const zoomPercent = (value: number) => {
    return `${Math.round(value * 100)}%`
  }

  const onCroppedImageConfirm = async () => {
    try {
      //@ts-ignore
      const {file, url} = await getCroppedImg(photoUrl, croppedAreaPixels as Area, rotation)
      setPhotoUrl(url)
      setFile(file)
      setOpenCrop(false)
      dispatch(setUserPhotoThunkCreator(userId, token, file))
    } catch (e) {
      errorHandler(e)
    }
  }
  const onZoomChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setZoom(+e.currentTarget.value)
  }
  const onRotationChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRotation(+e.currentTarget.value)
  }

  const toggleImageCrop = () => {
    setOpenCrop(false)
  }
  return (
    <>
      <div className={s.cropper__wrapper}>
        <Cropper
          image={photoUrl}
          crop={crop}
          zoom={zoom}
          rotation={rotation}
          aspect={1}
          onCropChange={setCrop}
          onRotationChange={setRotation}
          onZoomChange={setZoom}
          onCropComplete={cropComplete}
        />
      </div>
      <div className={s.cropper__actions}>
        <div className={s.cropper__sliders__container}>
          <div className={s.slider__wrapper}>
            <p className={s.cropper__input__value}> Zoom : {zoomPercent(zoom)}</p>
            <input className={s.cropper__range} type={'range'} min={1} max={3} step={0.1}
                   value={zoom}
                   onChange={onZoomChangeHandler}
            />
          </div>
          <div className={s.slider__wrapper}>
            <p className={s.cropper__input__value}> Rotation : {rotation}</p>
            <input className={s.cropper__range} type={'range'} min={0} max={360}
                   value={rotation}
                   onChange={onRotationChangeHandler}
            />
          </div>
        </div>
        <div className={s.cropper__btn__container}>
          <button className={s.cropper__btn} onClick={toggleImageCrop}>Cancel</button>
          <button className={s.cropper__btn} onClick={onCroppedImageConfirm}>Save</button>
        </div>
      </div>
    </>
  );
};

export default CropImageModal;