import React from 'react'

import '../../../../../style.scss'
import { Form, Formik } from 'formik'
import * as yup from 'yup'

import { TextField } from '../../../../common/Form/FormControls/FormControls'
import FormErrorMessage from '../../../../utils/FormErrorMessage/FormErrorMessage'

import s from './ChangeEmailForm.module.scss'

type propsType = {}
const changeEmailValidationSchema = yup.object().shape({
  email: yup.string().email().required(),
})
const ProfileInfoForm: React.FC<propsType> = () => {
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={changeEmailValidationSchema}
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={() => {}}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className={s.changeEmailForm}>
          <h3>Change e-mail</h3>
          <label className={'formLabel'}>
            <span>Enter new e-mail</span>
            {TextField({
              type: 'email',
              name: 'email',
              placeholder: 'Enter new email',
              className: `textField ${errors.email && touched.email ? 'errorTextField' : ''}`,
            })}
            {errors.email && touched.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
          </label>
          {!isSubmitting ? (
            <button type="submit" className="submitBtn">
              Wyślij
            </button>
          ) : (
            <span>Pending</span>
          )}
        </Form>
      )}
    </Formik>
  )
}

export default ProfileInfoForm
