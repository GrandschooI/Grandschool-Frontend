import React, { useEffect } from 'react'

import cn from 'classnames'
import { Form, Formik } from 'formik'
import FacebookLogin, {
  ReactFacebookFailureResponse,
  ReactFacebookLoginInfo,
} from 'react-facebook-login'
// eslint-disable-next-line import/no-named-as-default
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'
import { Redirect } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import * as yup from 'yup'

import { FACEBOOK_CLIENT_ID, GOOGLE_CLIENT_ID } from '../../../../Redux/reducers/userSlice'
import { getFontSize, getThemeStyle } from '../../../../Redux/selectors/styleSelector'
import {
  getIsAuthGoogleOrFacebook,
  getIsRegistered,
} from '../../../../Redux/selectors/userSelector'
import { useAppSelector } from '../../../../utils/Hooks/useAppSelector'
import { Checkbox, TextField } from '../../../common/Form/FormControls/FormControls'
import FacebookLoginIcon from '../../../SVGConponents/Forms/FacebookLoginIcon'
import FormErrorMessage from '../../../utils/FormErrorMessage/FormErrorMessage'
import { RegistrationFormDataType } from '../AuthPage'
import ConfirmRegistrationForm from '../ConfirmRegistration/ConfirmRegistrationForm'

import s from './Registration.module.scss'

import '../../../../style.scss'
import 'react-toastify/dist/ReactToastify.css'
// eslint-disable-next-line import/order
import { activeFontSize, activeThemeStyle } from '../../../../utils/scaffolding'

const MIN_PASSWORD_LENGTH = 8
const MAX_PASSWORD_LENGTH = 50

const registrationSchema = yup.object().shape({
  emailOrPhone: yup
    .string()
    .required('Email / Phone address is required')
    .test('email_or_phone', 'Email / Phone is invalid', value => {
      return validateEmail(value) || validatePhone(value)
    }),
  password: yup
    .string()
    .required('Password is required')
    .min(MIN_PASSWORD_LENGTH, 'Password must be at least 8 characters')
    .max(MAX_PASSWORD_LENGTH, 'Password must not be greater than 50 characters.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must be identical')
    .required(),
  terms: yup.boolean().isTrue('Accept terms is required'),
})

const phoneRegExp = /^\+[4,8]{2}?[0-9]{9}$/

const validateEmail = (email: string | undefined) => {
  return yup.string().email().isValidSync(email)
}
const validatePhone = (phone: string | undefined) => {
  return yup.string().matches(phoneRegExp, 'Phone must be valid').isValidSync(phone)
}

const RegistrationForm: React.FC<PropsType> = ({
  onSubmit,
  onGoogleButtonClick,
  onFacebookButtonClick,
  startGoogleAPI,
}) => {
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)
  const isRegistered = useAppSelector(getIsRegistered)
  const isAuthGoogleOrFacebook = useAppSelector(getIsAuthGoogleOrFacebook)

  useEffect(() => {
    startGoogleAPI()
  }, [])

  if (isAuthGoogleOrFacebook) return <Redirect to={'/profile'} />

  return (
    <div
      className={cn(
        activeThemeStyle(themeStyle),
        s[activeThemeStyle(themeStyle)],
        s[activeFontSize(fontSize)],
        [activeFontSize(fontSize)]
      )}
    >
      {isRegistered && <ConfirmRegistrationForm themeStyle={themeStyle} fontSize={fontSize} />}
      {!isRegistered && (
        <>
          <p className={s.signWithTitle}>Sign up with...</p>
          <div className={cn(s.anotherTypeLoginBtnWrap, [activeFontSize(fontSize)])}>
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

          <p className={s.orWord}>or</p>
          <Formik
            initialValues={{ emailOrPhone: '', password: '', confirmPassword: '', terms: false }}
            validationSchema={registrationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true)
              onSubmit(values)
              setSubmitting(false)
            }}
            validateOnChange={true}
            validateOnBlur={true}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form>
                <label className={cn('formLabel', s.formLabel)}>
                  <span>Enter PHONE NUMBER or E-MAIL</span>
                  {TextField({
                    type: 'emailOrPhone',
                    name: 'emailOrPhone',
                    placeholder: 'test@gmail.com / +48547323456',
                    className: `textField ${
                      errors.emailOrPhone && touched.emailOrPhone ? 'errorTextField' : ''
                    }`,
                  })}
                  {errors.emailOrPhone && touched.emailOrPhone && (
                    <FormErrorMessage>{errors.emailOrPhone}</FormErrorMessage>
                  )}
                </label>
                <label className={cn('formLabel', s.formLabel)}>
                  <span>PASSWORD</span>
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
                <label className={cn('formLabel', s.formLabel)}>
                  <span>CONFIRM PASSWORD</span>
                  {TextField({
                    type: 'password',
                    name: 'confirmPassword',
                    placeholder: 'Potwierdź hasło',
                    className: `textField ${
                      errors.confirmPassword && touched.confirmPassword ? 'errorTextField' : ''
                    }`,
                    changeToText: true,
                  })}
                  {errors.confirmPassword && touched.confirmPassword && (
                    <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
                  )}
                </label>
                <label
                  className={cn(
                    s.termsCheck,
                    [activeFontSize(fontSize)],
                    [activeThemeStyle(themeStyle)]
                  )}
                >
                  <Checkbox
                    label={'I agree to'}
                    name={'terms'}
                    propValue={true}
                    className={'checkboxLabel'}
                  />
                  <a href={'/'} className={s.termsLabel}>
                    terms & conditions
                  </a>
                  {errors.terms && touched.terms && (
                    <span className={s.termsError}>{errors.terms}</span>
                  )}
                </label>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    'whiteBtn',
                    themeStyle !== 'whiteTheme' ? 'submitBtn' : 'inverseBtn'
                  )}
                >
                  Wyślij
                </button>
              </Form>
            )}
          </Formik>
          <ToastContainer />
        </>
      )}
    </div>
  )
}

export default RegistrationForm

type PropsType = {
  onSubmit: (formData: RegistrationFormDataType) => void
  onGoogleButtonClick: (res: GoogleLoginResponse | GoogleLoginResponseOffline) => void
  onFacebookButtonClick: (res: ReactFacebookLoginInfo | ReactFacebookFailureResponse) => void
  startGoogleAPI: () => void
}
