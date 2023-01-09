import React from 'react'
import {NavLink, Redirect, Route, Switch, useLocation} from 'react-router-dom'
import s from './AuthPages.module.scss'
import '../../../style.scss'
import './AuthPagesGlobal.scss'
import RegistrationForm from './Registration/RegistrationForm'
import LoginForm from './Login/LoginForm'
import ConfirmRegistrationForm from './ConfirmRegistration/ConfirmRegistrationForm'
import cn from 'classnames'
import {toast} from 'react-toastify'
import ForgotPassword from './ForgotPassword/ForgotPassword';
import {gapi} from 'gapi-script';
import Popup from '../../common/Popup/Popup';
import {useDispatch} from 'react-redux';
import {
  forgotPasswordThunkCreator,
  GOOGLE_CLIENT_ID,
  loginThunkCreator,
  registerThunkCreator
} from '../../../Redux/reducers/userReducer';
import {useAppSelector} from '../../../utils/Hooks/useAppSelector';
import {getFontSize, getOptionsState, getThemeStyle} from '../../../Redux/selectors/styleSelector';
import {getAuthStatus} from '../../../Redux/selectors/userSelector';

const AuthPage = () => {

  const themeStyle = useAppSelector(getThemeStyle)
  const isOptionsOpen = useAppSelector(getOptionsState)
  const fontSize = useAppSelector(getFontSize)
  const isAuth = useAppSelector(getAuthStatus)

  const dispatch = useDispatch()

  const location: string = useLocation().pathname

  const onRegistrationSubmit = (formData: registrationFormDataType) => {
    toast('In progress')
    dispatch(registerThunkCreator(formData.email, formData.password, formData.confirmPassword))
  }
  const onLoginSubmit = (formData: loginDataType, onSubmitProps: any) => {
    dispatch(loginThunkCreator(formData.email, formData.password))
    onSubmitProps.setSubmitting(false)
  }
  const onSocialRegistrationButtonClick = (driver: string, access_token: string) => {
    dispatch(loginThunkCreator(undefined, undefined, driver, access_token))
  }
  const onConfirmRegistrationSubmit = () => {
    toast('In progress')
  }

  const startGoogleAPI = () => {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        clientId: GOOGLE_CLIENT_ID,
        scope: '',
        response_type: 'code'
      })
    })
  }
  const onGoogleButtonClick = (res: any) => {
    onSocialRegistrationButtonClick('google', res.accessToken)
  }
  const onFacebookButtonClick = (res: any) => {
    onSocialRegistrationButtonClick('facebook', res.accessToken)
  }
  const onForgotPasswordFormSubmit = (email: any) => {
    dispatch(forgotPasswordThunkCreator(email.email))
  }

  if (isAuth) {
    return <Redirect to={'/profile/personal-info'}/>
  }

  return (
    <section className={cn(s.authBackground, s[themeStyle ? themeStyle : ''],
      s[isOptionsOpen ? 'blindOptionsOpen' : ''], s[fontSize ? fontSize : ''])}>

      <Popup>
        <div className={s.authWrapper}>
          <div className={s.authSwitcherWrapper}>
            <NavLink className={cn(s.authSwitcher, location === '/registration' ? s.active : '')}
                     to="/registration">Join</NavLink>
            <NavLink className={cn(s.authSwitcher, location === '/login' ? s.active : '')} to="/login">Sign
              in</NavLink>
          </div>
          <Switch>
            <Route path="/registration" render={() => <RegistrationForm
              onSubmit={onRegistrationSubmit}
              startGoogleAPI={startGoogleAPI}
              onGoogleButtonClick={onGoogleButtonClick}
              onFacebookButtonClick={onFacebookButtonClick}
                   />}/>
            <Route path="/login" render={() => <LoginForm
              startGoogleAPI={startGoogleAPI}
              onGoogleButtonClick={onGoogleButtonClick}
              onFacebookButtonClick={onFacebookButtonClick}
              onSubmit={onLoginSubmit}
              onForgotPasswordFormSubmit={onForgotPasswordFormSubmit}
            />}/>
            <Route path="/confirm-registration"
                   render={() => <ConfirmRegistrationForm fontSize={fontSize} themeStyle={themeStyle}
                                                          onSubmit={onConfirmRegistrationSubmit}/>}/>
            <Route path="/forgot-password"
                   render={() => <ForgotPassword fontSize={fontSize} themeStyle={themeStyle}
                                                 onSubmit={onConfirmRegistrationSubmit}/>}/>
          </Switch>
        </div>
      </Popup>

    </section>
  )
}

export default AuthPage

export type registrationFormDataType = {
  email: string
  password: string
  confirmPassword: string
}
export type loginDataType = {
  email: string
  password: string
}
