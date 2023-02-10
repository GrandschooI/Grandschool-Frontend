import React, {useEffect, useState} from 'react'
import s from './ConfirmMail.module.scss'
import {Redirect, useLocation} from 'react-router-dom';
import {userAPI} from '../../../api/userAPI';
import {HttpStatusCode} from '../../../api/api';
import ConfirmRegistrationForm from '../AuthPages/ConfirmRegistration/ConfirmRegistrationForm';
import {useAppSelector} from '../../../utils/Hooks/useAppSelector';
import {getFontSize, getThemeStyle} from '../../../Redux/selectors/styleSelector';
import {toast} from 'react-toastify';

const ConfirmMail = () => {

  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)

  const urlForConfirmRequest = useLocation().search.replace('?url=', '');
  const [isMailConfirmed, setMailConfirmStatus] = useState(false)

  useEffect(() => {
    userAPI.verifyMail(urlForConfirmRequest).then(res => {
      if (res.status === HttpStatusCode.OK) setMailConfirmStatus(true)
    })
  }, [])

  const onConfirmRegistrationSubmit = () => {
    toast('In progress')
  }
  if (isMailConfirmed) return <Redirect to={'/profile'}/>
  return (
    <section className={s.confirmMailPage}>
      <div className={s.confirmMailPage__wrapper}>
        <ConfirmRegistrationForm onSubmit={onConfirmRegistrationSubmit} themeStyle={themeStyle} fontSize={fontSize}/>
      </div>
    </section>
  )
}

export default ConfirmMail