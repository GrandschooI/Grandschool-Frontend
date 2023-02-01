import React, {useEffect, useState} from 'react'
import {Form, Formik} from 'formik'
import {CSSTransition} from 'react-transition-group'
import {TextField} from '../../../common/Form/FormControls/FormControls'
import FacebookLoginIcon from '../../../SVGConponents/Forms/FacebookLoginIcon'
import s from './Login.module.scss'
import {loginDataType} from '../AuthPage'
import cn from 'classnames'
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import Popup from '../../../common/Popup/Popup';
import {useAppSelector} from '../../../../utils/Hooks/useAppSelector';
import {getFontSize, getThemeStyle} from '../../../../Redux/selectors/styleSelector';
import {FACEBOOK_CLIENT_ID, GOOGLE_CLIENT_ID} from '../../../../Redux/reducers/userReducer';
import * as yup from 'yup'
import FormErrorMessage from '../../../utils/FormErrorMessage/FormErrorMessage';


const loginFormValidationSchema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Email address is required'),
  password: yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Password must not be greater than 50 characters.'),
})
const forgotPasswordSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Invalid email address')
})


const LoginForm: React.FC<propsType> = (
  {
    onSubmit,
    onGoogleButtonClick,
    onFacebookButtonClick,
    onForgotPasswordFormSubmit,
    startGoogleAPI,
  }) => {

  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)

  useEffect(() => {
    startGoogleAPI()
  })
  const [isForgotPassPopup, setForgotPassPopupStatus] = useState(false)
  const [isForgotPassResultPopup, setIsForgotPassResultPopupStatus] = useState(false)
  const onForgotBtnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setForgotPassPopupStatus(!isForgotPassPopup)
  }
  const sendResetPasswordFlow = (email: any) => {
    onForgotPasswordFormSubmit(email)
    setForgotPassPopupStatus(!isForgotPassPopup)
    setIsForgotPassResultPopupStatus(!isForgotPassResultPopup)
  }
  return (
    <section>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={loginFormValidationSchema}
        onSubmit={onSubmit}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({isSubmitting, errors, touched}) => (
          <Form
            className={cn(themeStyle ? themeStyle : '', s[themeStyle ? themeStyle : ''], s[fontSize ? fontSize : ''],
              [fontSize ? fontSize : ''])}>
            <label className={'formLabel'}>
              <span>Login</span>
              {TextField({
                type: 'email',
                name: 'email',
                placeholder: 'Wpisz adres e-mail',
                className: `textField ${errors.email && touched.email ? 'errorTextField' : ''}`
              })}
              {errors.email && touched.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
            </label>
            <label className={'formLabel'}>
              <span>Hasło</span>
              {TextField({
                type: 'password',
                name: 'password',
                placeholder: 'Wpisz hasło',
                  className: `textField ${errors.password && touched.password ? 'errorTextField' : ''}`,
                changeToText: true
              })}
              {errors.password && touched.password && <FormErrorMessage>{errors.password}</FormErrorMessage>}
            </label>
            {
              !isSubmitting ? <button type="submit" className="submitBtn">Wyślij</button>
                : <span>Pending</span>
            }
            <button onClick={onForgotBtnClick} className={s.forgotPassword}>Forgot password?</button>
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
                icon={<FacebookLoginIcon/>}
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
          exitActive: s.optionExitActive
        }}
        unmountOnExit
      >
        <section className="overlay">
          <Popup>
            <Formik initialValues={{email: ''}}
                    validationSchema={forgotPasswordSchema}
                    onSubmit={sendResetPasswordFlow}
                    validateOnBlur={true}
                    validateOnChange={true}
            >
              {({touched, errors}) => (
                <Form>
                  <label className={'formLabel'}>
                    <span>Укажи адрес электронной почты</span>
                    {TextField({
                      type: 'email',
                      name: 'email',
                      placeholder: 'Wpisz adres e-mail',
                        className: `textField ${errors.email && touched.email ? 'errorTextField' : ''}`
                    })}
                    {errors.email && touched.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
                  </label>
                  <div className={s.popupBtnWrapper}>
                    <button type="submit" className="submitBtn">Wyślij</button>
                    <button onClick={() => setForgotPassPopupStatus(!isForgotPassPopup)}
                            className={'inverseBtn'}>Zamknij
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
          exitActive: s.optionExitActive
        }}
        unmountOnExit>
        <section className={cn('overlay', s.resultForgotPassPopup)}>
          <Popup>
            <p className={s.desc}>
              На указанный тобой адрес электронной почты было отправлено письмо с дальнейшими инструкциями
            </p>
            <button className="submitBtn"
                    onClick={() => setIsForgotPassResultPopupStatus(!isForgotPassResultPopup)}>Close
            </button>
          </Popup>
        </section>
      </CSSTransition>

    </section>
  )
}

export default LoginForm


type propsType = {
  onSubmit: (formData: loginDataType, onSubmitProps: any) => void
  onGoogleButtonClick: any
  onFacebookButtonClick: any
  onForgotPasswordFormSubmit: any
  startGoogleAPI: any
}
