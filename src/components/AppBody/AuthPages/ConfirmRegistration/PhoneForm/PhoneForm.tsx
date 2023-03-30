import React from 'react'

import cn from 'classnames'
import { Form, Formik } from 'formik'
import { Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import {
  confirmPhoneVerify,
  sendPhoneVerify,
  setIsRegistered,
} from '../../../../../Redux/reducers/userSlice'
import { useAppDispatch } from '../../../../../Redux/redux-toolkit-store'
import { TextField } from '../../../../common/Form/FormControls/FormControls'
import FormErrorMessage from '../../../../utils/FormErrorMessage/FormErrorMessage'
import s from '../ConfirmRegistration.module.scss'

const confirmRegistrationFormSchema = yup.object().shape({
  confirmationCode: yup.number().required('Code is required'),
})

const PhoneForm: React.FC<PropsType> = ({ userPhone }) => {
  const dispatch = useAppDispatch()

  const clickBack = () => dispatch(setIsRegistered({ isRegistered: false }))
  const didNotReceiveMessageCode = () => dispatch(sendPhoneVerify(userPhone))

  return (
    <>
      <Formik
        initialValues={{ confirmationCode: '' }}
        validationSchema={confirmRegistrationFormSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true)

          dispatch(confirmPhoneVerify({ phone: userPhone, code: Number(values.confirmationCode) }))
            .unwrap()
            .then(message => {
              if (message === 'success') return <Redirect to="/profile" />
              toast(message)
            })

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
              <button
                disabled={isSubmitting}
                className={cn(s.goBack, 'submitBtn')}
                onClick={clickBack}
              >
                Back
              </button>
              <button type="submit" disabled={isSubmitting} className={cn(s.continue, 'submitBtn')}>
                Wyślij
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <button className={s.repeatCode} onClick={didNotReceiveMessageCode}>
        I didn`t get a code
      </button>
    </>
  )
}

export default PhoneForm

type PropsType = {
  userPhone: string
}
