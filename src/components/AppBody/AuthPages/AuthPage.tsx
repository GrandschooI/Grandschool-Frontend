import React from 'react'

import '../../../style.scss'
import './AuthPagesGlobal.scss'
import cn from 'classnames'
import { FormikValues } from 'formik/dist/types'
import { gapi } from 'gapi-script'
import { ReactFacebookFailureResponse, ReactFacebookLoginInfo } from 'react-facebook-login'
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { NavLink, Route, Switch, useLocation } from 'react-router-dom'

import {
  GOOGLE_CLIENT_ID,
  loginThunkCreator,
  registerThunkCreator,
} from '../../../Redux/reducers/userSlice'
import { getFontSize, getOptionsState, getThemeStyle } from '../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../utils/Hooks/useAppSelector'
import { activeFontSize, activeThemeStyle } from '../../../utils/scaffolding'
import Popup from '../../common/PopupSection/Popup/Popup'

import s from './AuthPages.module.scss'
import LoginForm from './Login/LoginForm'
import RegistrationForm from './Registration/RegistrationForm'

const AuthPage = () => {
  const themeStyle = useAppSelector(getThemeStyle)
  const isOptionsOpen = useAppSelector(getOptionsState)
  const fontSize = useAppSelector(getFontSize)

  const dispatch = useDispatch()

  const location: string = useLocation().pathname

  const onRegistrationSubmit = (formData: RegistrationFormDataType) => {
    dispatch(
      registerThunkCreator(formData.emailOrPhone, formData.password, formData.confirmPassword)
    )
  }
  const onLoginSubmit = (formData: loginDataType, onSubmitProps: FormikValues) => {
    dispatch(loginThunkCreator(formData.email, formData.password))
    onSubmitProps.setSubmitting(false)
  }
  const onSocialRegistrationButtonClick = (driver: string, access_token: string) => {
    dispatch(loginThunkCreator(undefined, undefined, driver, access_token))
  }

  const startGoogleAPI = () => {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        clientId: GOOGLE_CLIENT_ID,
        scope: '',
        response_type: 'code',
      })
    })
  }
  const onGoogleButtonClick = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ('accessToken' in res) {
      onSocialRegistrationButtonClick('google', res.accessToken)
    }
  }
  const onFacebookButtonClick = (res: ReactFacebookLoginInfo | ReactFacebookFailureResponse) => {
    if ('accessToken' in res) {
      onSocialRegistrationButtonClick('facebook', res.accessToken)
    }
  }

  return (
    <section
      className={cn(
        s.authBackground,
        s[activeThemeStyle(themeStyle)],
        s[isOptionsOpen ? 'blindOptionsOpen' : ''],
        s[activeFontSize(fontSize)]
      )}
    >
      <Popup>
        <div className={s.authWrapper}>
          <div className={s.authSwitcherWrapper}>
            <NavLink
              className={cn(s.authSwitcher, location === '/registration' ? s.active : '')}
              to="/registration"
            >
              Join
            </NavLink>
            <NavLink
              className={cn(s.authSwitcher, location === '/login' ? s.active : '')}
              to="/login"
            >
              Sign in
            </NavLink>
          </div>
          <Switch>
            <Route
              path="/registration"
              render={() => (
                <RegistrationForm
                  onSubmit={onRegistrationSubmit}
                  startGoogleAPI={startGoogleAPI}
                  onGoogleButtonClick={onGoogleButtonClick}
                  onFacebookButtonClick={onFacebookButtonClick}
                />
              )}
            />
            <Route
              path="/login"
              render={() => (
                <LoginForm
                  startGoogleAPI={startGoogleAPI}
                  onGoogleButtonClick={onGoogleButtonClick}
                  onFacebookButtonClick={onFacebookButtonClick}
                  onSubmit={onLoginSubmit}
                />
              )}
            />
          </Switch>
        </div>
      </Popup>
    </section>
  )
}

export default AuthPage

export type RegistrationFormDataType = {
  emailOrPhone: string
  password: string
  confirmPassword: string
}
export type loginDataType = {
  email: string
  password: string
}
