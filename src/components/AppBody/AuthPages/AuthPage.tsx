import React from 'react'
import {NavLink, Redirect, Route, Switch, useLocation} from 'react-router-dom'
import s from './AuthPages.module.scss'
import '../../../style.scss'
import './AuthPagesGlobal.scss'
import {Nullable} from '../../../Redux/redux-store'
import RegistrationForm from './Registration/RegistrationForm'
import LoginForm from './Login/LoginForm'
import ConfirmRegistrationForm from './ConfirmRegistration/ConfirmRegistrationForm'
import cn from 'classnames'
import {toast} from 'react-toastify'
import ForgotPassword from './ForgotPassword/ForgotPassword';
import {gapi} from 'gapi-script';
import Popup from '../../common/Popup/Popup';

const AuthPage: React.FC<propsType> = (
  {
    registerThunkCreator, loginThunkCreator, isAuth, blindMode,
    themeStyle, isOptionsOpen, images,
    fontSize, forgotPasswordThunkCreator, FACEBOOK_CLIENT_ID, GOOGLE_CLIENT_ID
  }) => {
  const location: string = useLocation().pathname

  const onRegistrationSubmit = (formData: registrationFormDataType) => {
    toast('In progress')
    registerThunkCreator(formData.email, formData.password, formData.confirmPassword)
  }
  const onLoginSubmit = (formData: loginDataType, onSubmitProps: any) => {
    loginThunkCreator(formData.email, formData.password)
    onSubmitProps.setSubmitting(false)
  }
  const onSocialRegistrationButtonClick = (driver: string, access_token: string) => {
    loginThunkCreator(undefined, undefined, driver, access_token)
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
    forgotPasswordThunkCreator(email.email)
  }

  if (isAuth) {
    return <Redirect to={'/profile/personal-info'}/>
  }

  return (
    <section className={cn(s.authBackground, s[themeStyle ? themeStyle : ''],
      s[isOptionsOpen ? 'blindOptionsOpen' : ''], s[fontSize ? fontSize : ''])}>

      <Popup blindMode={blindMode} themeStyle={themeStyle} images={images}
             fontSize={fontSize}>
        <div className={s.authWrapper}>
          <div className={s.authSwitcherWrapper}>
            <NavLink className={cn(s.authSwitcher, location === '/registration' ? s.active : '')}
                     to="/registration">Join</NavLink>
            <NavLink className={cn(s.authSwitcher, location === '/login' ? s.active : '')} to="/login">Sign
              in</NavLink>
          </div>
          <Switch>
            <Route path="/registration"
                   render={() => <RegistrationForm themeStyle={themeStyle} fontSize={fontSize}
                                                   onSubmit={onRegistrationSubmit}
                                                   startGoogleAPI={startGoogleAPI}
                                                   onGoogleButtonClick={onGoogleButtonClick}
                                                   onFacebookButtonClick={onFacebookButtonClick}
                                                   FACEBOOK_CLIENT_ID={FACEBOOK_CLIENT_ID}
                                                   GOOGLE_CLIENT_ID={GOOGLE_CLIENT_ID}
                   />}/>
            <Route path="/login" render={() => <LoginForm fontSize={fontSize} themeStyle={themeStyle}
                                                          images={images} blindMode={blindMode}
                                                          startGoogleAPI={startGoogleAPI}
                                                          onGoogleButtonClick={onGoogleButtonClick}
                                                          onFacebookButtonClick={onFacebookButtonClick}
                                                          onSubmit={onLoginSubmit}
                                                          onForgotPasswordFormSubmit={onForgotPasswordFormSubmit}
                                                          FACEBOOK_CLIENT_ID={FACEBOOK_CLIENT_ID}
                                                          GOOGLE_CLIENT_ID={GOOGLE_CLIENT_ID}/>}/>
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
type propsType = {
  isAuth: boolean
  blindMode: boolean
  themeStyle: Nullable<string>
  isOptionsOpen: boolean
  images: boolean,
  fontSize: Nullable<string>
  GOOGLE_CLIENT_ID: string
  FACEBOOK_CLIENT_ID: string
  registerThunkCreator: (email: string, password: string, confirmPassword: string) => void
  loginThunkCreator: (email?: string, password?: string, driver?: string, access_token?: string) => any
  forgotPasswordThunkCreator: (email: string) => void
}