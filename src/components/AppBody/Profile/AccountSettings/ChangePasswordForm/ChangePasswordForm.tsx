import React from 'react'
import {Form, Formik} from 'formik'
import '../../../../../style.scss'
import {TextField} from '../../../../common/Form/FormControls/FormControls'
import s from './ChangePasswordForm.module.scss'
import * as yup from 'yup'
import FormErrorMessage from '../../../../utils/FormErrorMessage/FormErrorMessage';

type propsType = {}
const changePasswordValidationSchema = yup.object().shape({
  password: yup.string().required('Current password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Password must not be greater than 50 characters'),
  newPassword: yup.string().required('Current password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Password must not be greater than 50 characters'),
  reenteredNewPassword: yup.string()
    .oneOf([yup.ref('newPassword'), null], 'Passwords must be identical')
    .required('This field is required'),
})
const ProfileInfoForm: React.FC<propsType> = () => {

  return (
    <Formik
      initialValues={{password: '', newPassword: '', reenteredNewPassword: ''}}
      validationSchema={changePasswordValidationSchema}
      validateOnChange={true}
      validateOnBlur={true}
      onSubmit={() => {
      }}
    >
      {({isSubmitting, errors, touched}) => (
        <Form className={s.changePasswordForm}>
          <h3>Change password</h3>
          <label className={'formLabel'}>
            <span>Enter current password</span>
            {TextField({
              type: 'password',
              name: 'password',
              placeholder: 'Enter current password',
              className: `textField ${errors.password && touched.password ? 'errorTextField' : ''}`
            })}
            {errors.password && touched.password && <FormErrorMessage>{errors.password}</FormErrorMessage>}
          </label>

          <label className={'formLabel'}>
            <span>Enter new password</span>
            {TextField({
              type: 'password',
              name: 'newPassword',
              placeholder: 'Enter new password',
              className: `textField ${errors.newPassword && touched.newPassword ? 'errorTextField' : ''}`
            })}
            {errors.newPassword && touched.newPassword && <FormErrorMessage>{errors.newPassword}</FormErrorMessage>}
          </label>

          <label className={'formLabel'}>
            <span>Re-enter new password</span>
            {TextField({
              type: 'password',
              name: 'reenteredNewPassword',
              placeholder: 'Re-enter the password',
              className: `textField ${errors.reenteredNewPassword && touched.reenteredNewPassword ? 'errorTextField' : ''}`
            })}
            {errors.reenteredNewPassword && touched.reenteredNewPassword &&
                <FormErrorMessage>{errors.reenteredNewPassword}</FormErrorMessage>}
          </label>
          {!isSubmitting ? <button type="submit" className="submitBtn">Wyślij</button> : <span>Pending</span>}
        </Form>
      )}
    </Formik>
  )
}

export default ProfileInfoForm