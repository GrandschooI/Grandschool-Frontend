import React, { ChangeEvent, useState } from 'react'

import cn from 'classnames'
import Cropper from 'react-easy-crop'
import { useDispatch } from 'react-redux'

import {
  errorHandler,
  setUserPhotoThunkCreator,
} from '../../../../../../../Redux/reducers/userSlice'
import { Nullable } from '../../../../../../../Redux/redux-toolkit-store'
import { useAppSelector } from '../../../../../../../utils/Hooks/useAppSelector'
import getCroppedImg from '../utils/cropImage'

import { Area, Point } from './types/cropImageTypes'
import s from './сropImageModal.module.scss'

type PropsType = {
  photoUrl: Nullable<string>
  setOpenCrop: (open: boolean) => void
  setPhotoUrl: (photoURL: Nullable<string>) => void
  setFile: (file: File) => void
}

const CropImageModal: React.FC<PropsType> = ({ photoUrl, setOpenCrop, setPhotoUrl, setFile }) => {
  const userId = useAppSelector(state => state.userData.currentUser.id) as number
  const token = localStorage.getItem('token') as string

  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
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
      const { file, url } = await getCroppedImg(photoUrl, croppedAreaPixels as Area, rotation)

      setPhotoUrl(url)
      setFile(file)
      setOpenCrop(false)
      dispatch(setUserPhotoThunkCreator(userId, token, file))
    } catch (error) {
      if (error instanceof Error) {
        errorHandler(error.message)
      }
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
      <div className={s.cropperWrapper}>
        <Cropper
          image={photoUrl as string}
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
      <div className={s.cropperActions}>
        <div className={s.cropperSlidersContainer}>
          <div className={s.sliderWrapper}>
            <p className={s.cropperInputValue}> Zoom : {zoomPercent(zoom)}</p>
            <input
              className={s.cropper__range}
              type={'range'}
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              onChange={onZoomChangeHandler}
            />
          </div>
          <div className={s.sliderWrapper}>
            <p className={s.cropperInputValue}> Rotation : {rotation}</p>
            <input
              className={s.cropper__range}
              type={'range'}
              min={0}
              max={360}
              value={rotation}
              onChange={onRotationChangeHandler}
            />
          </div>
        </div>
        <div className={s.cropperBtnContainer}>
          <button className={cn(s.cropperBtn, 'inverseBtn')} onClick={toggleImageCrop}>
            Cancel
          </button>
          <button className={cn(s.cropperBtn, 'submitBtn')} onClick={onCroppedImageConfirm}>
            Save
          </button>
        </div>
      </div>
    </>
  )
}

export default CropImageModal
