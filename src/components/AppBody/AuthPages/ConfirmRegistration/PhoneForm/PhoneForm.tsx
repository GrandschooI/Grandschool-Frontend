import React from 'react'

import cn from 'classnames'
import { Form, Formik } from 'formik'
import * as yup from 'yup'

import { TextField } from '../../../../common/Form/FormControls/FormControls'
import FormErrorMessage from '../../../../utils/FormErrorMessage/FormErrorMessage'
import s from '../ConfirmRegistration.module.scss'

const confirmRegistrationFormSchema = yup.object().shape({
  confirmationCode: yup.number().required('Code is required'),
})

const PhoneForm: React.FC<PropsType> = ({ onSubmit, userPhone }) => {
  return (
    <Formik
      initialValues={{ confirmationCode: '' }}
      validationSchema={confirmRegistrationFormSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true)
        onSubmit(values)
        setSubmitting(false)
      }}
      validateOnChange={true}
      validateOnBlur={true}
    >
      {({ isSubmitting, touched, errors }) => (
        <Form>
          <label className={cn(s.confirmLabel, 'formLabel')}>
            <span>Confirmation code was sent to:</span>
            <p className={s.phone}>{userPhone}</p>
            {TextField({
              type: 'number',
              name: 'confirmationCode',
              placeholder: 'Enter the code from the message',
              className: `textField ${
                errors.confirmationCode && touched.confirmationCode ? 'errorTextField' : ''
              }`,
            })}
            {errors.confirmationCode && touched.confirmationCode && (
              <FormErrorMessage>{errors.confirmationCode}</FormErrorMessage>
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
          <button className={s.repeatCode}>I didn`t get a code</button>
        </Form>
      )}
    </Formik>
  )
}

export default PhoneForm

type PropsType = {
  onSubmit: (formData: any) => void
  userPhone: string
}
