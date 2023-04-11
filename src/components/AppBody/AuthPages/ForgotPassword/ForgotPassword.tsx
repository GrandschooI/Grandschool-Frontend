import React from 'react'

import cn from 'classnames'
import { Form, Formik, FormikErrors } from 'formik'
import { FormikValues } from 'formik/dist/types'
import * as yup from 'yup'

import '../../../../style.scss'
import 'react-toastify/dist/ReactToastify.css'
import { Nullable } from '../../../../Redux/redux-toolkit-store'
import { TextField } from '../../../common/Form/FormControls/FormControls'
import FormErrorMessage from '../../../utils/FormErrorMessage/FormErrorMessage'

import s from './ForgotPassword.module.scss'

const forgotPasswordSchema = yup.object().shape({
  forgotPasswordEmailField: yup
    .string()
    .required('Email is required')
    .email('Invalid email address'),
})

const ForgotPassword: React.FC<propsType> = ({ onSubmit, themeStyle, fontSize }) => {
  return (
    <Formik
      className={cn(
        themeStyle ? themeStyle : '',
        s[themeStyle ? themeStyle : ''],
        s[fontSize ? fontSize : ''],
        [fontSize ? fontSize : '']
      )}
      initialValues={{ forgotPasswordEmailField: '' }}
      validationSchema={forgotPasswordSchema}
      onSubmit={onSubmit}
      validateOnChange={true}
      validateOnBlur={true}
    >
      {({ isSubmitting, touched, errors }) => (
        <Form>
          <label className={'formLabel'}>
            <span>Enter your email:</span>
            {TextField({
              type: 'email',
              name: 'forgotPasswordEmailField',
              placeholder: 'Enter your email',
              className: `textField ${
                errors.forgotPasswordEmailField && touched.forgotPasswordEmailField
                  ? 'errorTextField'
                  : ''
              }`,
            })}
            {errors.forgotPasswordEmailField && touched.forgotPasswordEmailField && (
              <FormErrorMessage>{errors.forgotPasswordEmailField}</FormErrorMessage>
            )}
          </label>
          <div className={s.buttonWrapper}>
            <button type="submit" disabled={isSubmitting} className={cn(s.goBack, 'submitBtn')}>
              Back
            </button>
            <button type="submit" disabled={isSubmitting} className={cn(s.continue, 'submitBtn')}>
              Wyślij
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default ForgotPassword

type propsType = {
  onSubmit: (formData: FormikErrors<FormikValues>) => void
  themeStyle: Nullable<string>
  fontSize: Nullable<string>
}
