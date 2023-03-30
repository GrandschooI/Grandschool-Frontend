import React, { useState } from 'react'

import cn from 'classnames'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { sendEmailVerify, setIsRegistered } from '../../../../../Redux/reducers/userSlice'
import s from '../ConfirmRegistration.module.scss'

type PropsType = {
  email: string
}

const EmailNotification: React.FC<PropsType> = ({ email }) => {
  const [redirect, setRedirect] = useState(false)
  const dispatch = useDispatch()

  const clickBack = () => dispatch(setIsRegistered({ isRegistered: false }))
  const clickOK = () => setRedirect(true)

  const didNotReceiveMessageEmail = () => dispatch(sendEmailVerify(email))

  if (redirect) return <Redirect to={'/profile'} />

  return (
    <div>
      <label className={cn(s.confirmLabel, 'formLabel')}>
        <span>
          Confirm your email address. Please check your mailbox and follow the instructions below.
          Email sent to:{' '}
        </span>
        <p className={s.phone}>{email}</p>
      </label>
      <div className={s.buttonWrapper}>
        <button className={cn(s.goBack, 'submitBtn')} onClick={clickBack}>
          Back
        </button>
        <button className={cn(s.continue, 'submitBtn')} onClick={clickOK}>
          Ok
        </button>
      </div>
      <button className={s.repeatCode} onClick={didNotReceiveMessageEmail}>
        I didn`t get the email
      </button>
    </div>
  )
}

export default EmailNotification
