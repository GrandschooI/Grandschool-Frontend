import React, { useEffect } from 'react'

import cn from 'classnames'
import { useDispatch } from 'react-redux'

import { sendEmailVerify, sendPhoneVerify } from '../../../../Redux/reducers/userSlice'
import { Nullable } from '../../../../Redux/redux-toolkit-store'
import { getUserEmail, getUserPhone } from '../../../../Redux/selectors/userSelector'
import { useAppSelector } from '../../../../utils/Hooks/useAppSelector'

import '../../../../style.scss'
import 'react-toastify/dist/ReactToastify.css'

import s from './ConfirmRegistration.module.scss'
import EmailNotification from './EmailNotification/EmailNotification'
import PhoneForm from './PhoneForm/PhoneForm'

const ConfirmRegistrationForm: React.FC<PropsType> = ({ themeStyle, fontSize }) => {
  const dispatch = useDispatch()
  const phone = useAppSelector(getUserPhone)
  const email = useAppSelector(getUserEmail)

  useEffect(() => {
    if (phone) dispatch(sendPhoneVerify(phone))

    if (email) dispatch(sendEmailVerify(email))
  }, [phone, email])

  return (
    <div
      className={cn(
        s.confirmRegistrationWrap,
        themeStyle ? themeStyle : '',
        s[themeStyle ? themeStyle : ''],
        s[fontSize ? fontSize : ''],
        [fontSize ? fontSize : '']
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
