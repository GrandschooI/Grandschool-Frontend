import React, { useEffect } from 'react'

import cn from 'classnames'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { sendEmailVerify, sendPhoneVerify } from '../../../../Redux/reducers/userSlice'
import { Nullable } from '../../../../Redux/redux-toolkit-store'
import { getIsVerify, getUserEmail, getUserPhone } from '../../../../Redux/selectors/userSelector'
// eslint-disable-next-line import/order
import { useAppSelector } from '../../../../utils/Hooks/useAppSelector'

import '../../../../style.scss'
import 'react-toastify/dist/ReactToastify.css'

import { activeFontSize, activeThemeStyle } from '../../../../utils/scaffolding'

import s from './ConfirmRegistration.module.scss'
import EmailNotification from './EmailNotification/EmailNotification'
import PhoneForm from './PhoneForm/PhoneForm'

const ConfirmRegistrationForm: React.FC<PropsType> = ({ themeStyle, fontSize }) => {
  const dispatch = useDispatch()
  const phone = useAppSelector(getUserPhone)
  const email = useAppSelector(getUserEmail)
  const isVerify = useAppSelector(getIsVerify)

  const isMessageSend = JSON.parse(localStorage.getItem('sendMessage')!)

  useEffect(() => {
    if (isVerify || isMessageSend) return
    if (phone) dispatch(sendPhoneVerify(phone))
    if (email) dispatch(sendEmailVerify(email))
  }, [phone, email])

  if (isVerify) return <Redirect to="/" />

  return (
    <div
      className={cn(
        s.confirmRegistrationWrap,
        activeThemeStyle(themeStyle),
        s[activeThemeStyle(themeStyle)],
        s[activeFontSize(fontSize)],
        [activeFontSize(fontSize)]
      )}
    >
      {email && <EmailNotification email={email} />}
      {phone && <PhoneForm userPhone={phone} />}
    </div>
  )
}

export default ConfirmRegistrationForm

type PropsType = {
  themeStyle: Nullable<string>
  fontSize: Nullable<string>
}
