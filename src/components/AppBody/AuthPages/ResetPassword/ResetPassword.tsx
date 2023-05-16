import React, { useState } from 'react'

import cn from 'classnames'
import { Form, Formik } from 'formik'
import { Redirect, useLocation } from 'react-router-dom'
import * as yup from 'yup'

import { sendNewPassword } from '../../../../Redux/reducers/userSlice'
import { useAppDispatch } from '../../../../Redux/redux-toolkit-store'
import {
  getFontSize,
  getOptionsState,
  getThemeStyle,
} from '../../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../../utils/Hooks/useAppSelector'
import {activeFontSize, activeThemeStyle} from '../../../../utils/scaffolding'
import { TextField } from '../../../common/Form/FormControls/FormControls'
import Popup from '../../../common/PopupSection/Popup/Popup'
import FormErrorMessage from '../../../utils/FormErrorMessage/FormErrorMessage'

import s from './ResetPassword.module.scss'

const newPasswordSchema = yup.object().shape({
  newPassword: yup
    .string()
    .min(8, 'must be at least 8 characters')
    .max(50, 'must be at most 50 characters')
    .required('required field'),
})

export const ResetPassword = () => {
  const [redirect, setRedirect] = useState(false)

  const dispatch = useAppDispatch()
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)
  const isOptionsOpen = useAppSelector(getOptionsState)

  const { search } = useLocation()
  const searchParams = new URLSearchParams(search)
  const token = searchParams.get('token')

  const submitNewPassword = ({ newPassword }: { newPassword: string }) => {
    token &&
      dispatch(sendNewPassword({ token, newPassword }))
        .unwrap()
        .then(message => {
          if (message === 'Success') {
            setTimeout(() => {
              setRedirect(true)
            }, 1000)
          }
        })
  }

  if (redirect) return <Redirect to={'/login'} />

  return (
    <section
      className={cn(
        s.resetPasswordPage,
        s[activeThemeStyle(themeStyle)],
        s[isOptionsOpen ? 'blindOptionsOpen' : '']
      )}
    >
      <div className={cn(s.resetPasswordPageWrapper, s[activeThemeStyle(themeStyle)])}>
        <Popup>
          <div className={cn(s.contentContainer, s[activeThemeStyle(themeStyle)], s[fontSize])}>
            <Formik
              initialValues={{ newPassword: '' }}
              validationSchema={newPasswordSchema}
              onSubmit={submitNewPassword}
              validateOnChange={true}
              validateOnBlur={true}
            >
              {({ touched, errors }) => (
                <Form
                  className={cn(
                    activeThemeStyle(themeStyle),
                    s[activeThemeStyle(themeStyle)],
                    s[activeFontSize(fontSize)],
                    [activeFontSize(fontSize)]
                  )}
                >
                  <label className={'formLabel'}>
                    <span>Enter new password:</span>
                    {TextField({
                      type: 'text',
                      name: 'newPassword',
                      placeholder: 'Enter new password',
                      className: `textField ${
                        errors.newPassword && touched.newPassword ? 'errorTextField' : ''
                      }`,
                    })}
                    {errors.newPassword && touched.newPassword && (
                      <FormErrorMessage>{errors.newPassword}</FormErrorMessage>
                    )}
                  </label>

                  <button type="submit" className={cn('submitBtn')}>
                    Wyślij
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </Popup>
      </div>
    </section>
  )
}
