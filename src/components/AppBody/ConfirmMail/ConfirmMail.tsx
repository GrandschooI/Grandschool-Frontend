import React, {useEffect, useState} from 'react'
import s from './ConfirmMail.module.scss'
import {Redirect, useLocation} from 'react-router-dom';
import {userAPI} from '../../../api/userAPI';
import {HttpStatusCode} from '../../../api/api';
import ConfirmRegistrationForm from '../AuthPages/ConfirmRegistration/ConfirmRegistrationForm';
import {useAppSelector} from '../../../utils/Hooks/useAppSelector';
import {getFontSize, getThemeStyle} from '../../../Redux/selectors/styleSelector';
import {toast} from 'react-toastify';
import {getUserEmail} from "../../../Redux/selectors/userSelector";
import {useDispatch} from "react-redux";
import {toggleIsLoaded} from "../../../Redux/reducers/styleSlice";

const ConfirmMail = () => {
  const dispatch = useDispatch()

  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)
  const emailCurrentUser = useAppSelector(getUserEmail)

  // const urlForConfirmRequest = useLocation().search.replace('?url=', '');
  const [isMailConfirmed, setMailConfirmStatus] = useState(false)

  useEffect(() => {
    dispatch(toggleIsLoaded({isLoaded: false}))
    userAPI.verifyMail({email: emailCurrentUser}).then(res => {
      if (res.status === HttpStatusCode.OK) setMailConfirmStatus(true)
    }).finally(() => {
      dispatch(toggleIsLoaded({isLoaded: true}))
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