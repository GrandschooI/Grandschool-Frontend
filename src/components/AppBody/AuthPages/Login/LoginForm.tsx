import React, { useEffect, useState } from 'react'

import cn from 'classnames'
import { Form, Formik } from 'formik'
import FacebookLogin from 'react-facebook-login'
// eslint-disable-next-line import/no-named-as-default
import GoogleLogin from 'react-google-login'
import { Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import { CSSTransition } from 'react-transition-group'
import * as yup from 'yup'

import {
  FACEBOOK_CLIENT_ID,
  forgotPassword,
  GOOGLE_CLIENT_ID,
} from '../../../../Redux/reducers/userSlice'
import { useAppDispatch } from '../../../../Redux/redux-toolkit-store'
import { getFontSize, getThemeStyle } from '../../../../Redux/selectors/styleSelector'
import { getAuthStatus } from '../../../../Redux/selectors/userSelector'
import { useAppSelector } from '../../../../utils/Hooks/useAppSelector'
import { TextField } from '../../../common/Form/FormControls/FormControls'
import Popup from '../../../common/PopupSection/Popup/Popup'
import FacebookLoginIcon from '../../../SVGConponents/Forms/FacebookLoginIcon'
import FormErrorMessage from '../../../utils/FormErrorMessage/FormErrorMessage'
import { loginDataType } from '../AuthPage'

import s from './Login.module.scss'

const loginFormValidationSchema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Email address is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Password must not be greater than 50 characters.'),
})
const forgotPasswordSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Invalid email address'),
})

const LoginForm: React.FC<PropsType> = ({
  onSubmit,
  onGoogleButtonClick,
  onFacebookButtonClick,
  startGoogleAPI,
}) => {
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)
  const isAuth = useAppSelector(getAuthStatus)
  const dispatch = useAppDispatch()

  useEffect(() => {
    startGoogleAPI()
  })
  const [isForgotPassPopup, setForgotPassPopupStatus] = useState(false)
  const [isForgotPassResultPopup, setIsForgotPassResultPopupStatus] = useState(false)
  const onForgotBtnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setForgotPassPopupStatus(true)
  }

  const onForgotPasswordFormSubmit = (email: any) => {
    dispatch(forgotPassword(email.email))
      .unwrap()
      .then(res => {
        if (res !== 'Success') return toast.error(res)

        toast.success(res)
        setIsForgotPassResultPopupStatus(true)
        setForgotPassPopupStatus(false)
      })
  }

  if (isAuth) return <Redirect to={'/profile'} />

  return (
    <section>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginFormValidationSchema}
        onSubmit={onSubmit}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({ errors, touched }) => (
          <Form
            className={cn(
              themeStyle ? themeStyle : '',
              s[themeStyle ? themeStyle : ''],
              s[fontSize ? fontSize : ''],
              [fontSize ? fontSize : '']
            )}
          >
            <label className={'formLabel'}>
              <span>Login</span>
              {TextField({
                type: 'email',
                name: 'email',
                placeholder: 'Wpisz adres e-mail',
                className: `textField ${errors.email && touched.email ? 'errorTextField' : ''}`,
              })}
              {errors.email && touched.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
            </label>
            <label className={'formLabel'}>
              <span>Hasło</span>
              {TextField({
                type: 'password',
                name: 'password',
                placeholder: 'Wpisz hasło',
                className: `textField ${
                  errors.password && touched.password ? 'errorTextField' : ''
                }`,
                changeToText: true,
              })}
              {errors.password && touched.password && (
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              )}
            </label>
            <button type="submit" className="submitBtn">
              Wyślij
            </button>
            <button onClick={onForgotBtnClick} className={s.forgotPassword}>
              Forgot password?
            </button>
            <p className={s.signWithTitle}>Or sign in with...</p>
            <div className={s.anotherTypeLoginBtnWrap}>
              <GoogleLogin
                className="anotherTypeLogin"
                clientId={GOOGLE_CLIENT_ID}
                buttonText={'Google'}
                onSuccess={onGoogleButtonClick}
              />
              <FacebookLogin
                appId={FACEBOOK_CLIENT_ID}
                callback={onFacebookButtonClick}
                icon={<FacebookLoginIcon />}
                textButton={'Facebook'}
                cssClass="anotherTypeLogin"
              />
            </div>
          </Form>
        )}
      </Formik>
      <CSSTransition
        in={isForgotPassPopup}
        timeout={300}
        classNames={{
          enter: s.optionEnter,
          enterActive: s.optionEnterActive,
          exitActive: s.optionExitActive,
        }}
        unmountOnExit
      >
        <section className="overlay">
          <Popup>
            <Formik
              initialValues={{ email: '' }}
              validationSchema={forgotPasswordSchema}
              onSubmit={onForgotPasswordFormSubmit}
              validateOnBlur={true}
              validateOnChange={true}
            >
              {({ touched, errors }) => (
                <Form>
                  <label className={'formLabel'}>
                    <span>Укажи адрес электронной почты</span>
                    {TextField({
                      type: 'email',
                      name: 'email',
                      placeholder: 'Wpisz adres e-mail',
                      className: `textField ${
                        errors.email && touched.email ? 'errorTextField' : ''
                      }`,
                    })}
                    {errors.email && touched.email && (
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    )}
                  </label>
                  <div className={s.popupBtnWrapper}>
                    <button type="submit" className="submitBtn">
                      Wyślij
                    </button>
                    <button
                      type="button"
                      onClick={() => setForgotPassPopupStatus(false)}
                      className={'inverseBtn'}
                    >
                      Zamknij
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </Popup>
        </section>
      </CSSTransition>

      <CSSTransition
        in={isForgotPassResultPopup}
        timeout={300}
        classNames={{
          enter: s.optionEnter,
          enterActive: s.optionEnterActive,
          exitActive: s.optionExitActive,
        }}
        unmountOnExit
      >
        <section
          className={cn(
            'overlay',
            s.resultForgotPassPopup,
            themeStyle ? themeStyle : '',
            s[themeStyle ? themeStyle : '']
          )}
        >
          <Popup>
            <p className={s.desc}>
              На указанный тобой адрес электронной почты было отправлено письмо с дальнейшими
              инструкциями
            </p>
            <button
              type="button"
              className="submitBtn"
              onClick={() => setIsForgotPassResultPopupStatus(false)}
            >
              Close
            </button>
          </Popup>
        </section>
      </CSSTransition>
    </section>
  )
}

export default LoginForm

type PropsType = {
  onSubmit: (formData: loginDataType, onSubmitProps: any) => void
  onGoogleButtonClick: any
  onFacebookButtonClick: any
  startGoogleAPI: any
}
