import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { Redirect, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

import { HttpStatusCode } from '../../../api/api'
import { userAPI } from '../../../api/userAPI'
import { toggleIsLoaded } from '../../../Redux/reducers/styleSlice'
import { getFontSize, getThemeStyle } from '../../../Redux/selectors/styleSelector'
import { getUserEmail } from '../../../Redux/selectors/userSelector'
import { useAppSelector } from '../../../utils/Hooks/useAppSelector'
import ConfirmRegistrationForm from '../AuthPages/ConfirmRegistration/ConfirmRegistrationForm'

import s from './ConfirmMail.module.scss'

const ConfirmMail = () => {
  const dispatch = useDispatch()

  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)
  const emailCurrentUser = useAppSelector(getUserEmail)

  // const urlForConfirmRequest = useLocation().search.replace('?url=', '');
  const [isMailConfirmed, setMailConfirmStatus] = useState(false)

  useEffect(() => {
    dispatch(toggleIsLoaded({ isLoaded: false }))
    userAPI
      .verifyMail({ email: emailCurrentUser })
      .then(res => {
        if (res.status === HttpStatusCode.OK) setMailConfirmStatus(true)
      })
      .finally(() => {
        dispatch(toggleIsLoaded({ isLoaded: true }))
      })
  }, [])

  const onConfirmRegistrationSubmit = () => {
    toast('In progress')
  }

  if (isMailConfirmed) return <Redirect to={'/profile'} />

  return (
    <section className={s.confirmMailPage}>
      <div className={s.confirmMailPage__wrapper}>
        <ConfirmRegistrationForm
          onSubmit={onConfirmRegistrationSubmit}
          themeStyle={themeStyle}
          fontSize={fontSize}
        />
      </div>
    </section>
  )
}

export default ConfirmMail
