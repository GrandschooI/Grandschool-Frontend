import React from 'react'
import {ErrorMessage, Form, Formik} from 'formik'
import '../../../../../style.scss'
import {TextField} from '../../../../common/Form/FormControls/FormControls'
import s from './ChangePasswordForm.module.scss'
import * as yup from 'yup'

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
    .required(),
})
const ProfileInfoForm: React.FC<propsType> = () => {

  return (
    <Formik
      initialValues={{password: '', newPassword: '', reenteredNewPassword: ''}}
      validationSchema={changePasswordValidationSchema}
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
              className: `textField`,
              errorClassname: `errorTextField`
            })}
            {errors.password && touched.password && <ErrorMessage name={errors.password}/>}
          </label>

          <label className={'formLabel'}>
            <span>Enter new password</span>
            {TextField({
              type: 'password',
              name: 'newPassword',
              placeholder: 'Enter new password',
              className: `textField`,
              errorClassname: `errorTextField`
            })}
            {errors.newPassword && touched.newPassword && <ErrorMessage name={errors.newPassword}/>}
          </label>

          <label className={'formLabel'}>
            <span>Re-enter new password</span>
            {TextField({
              type: 'password',
              name: 'reenteredNewPassword',
              placeholder: 'Re-enter the password',
              className: `textField`,
              errorClassname: `errorTextField`
            })}
            {errors.reenteredNewPassword && touched.reenteredNewPassword &&
                <ErrorMessage name={errors.reenteredNewPassword}/>}
          </label>
          {!isSubmitting ? <button type="submit" className="submitBtn">Wyślij</button> : <span>Pending</span>}
        </Form>
      )}
    </Formik>
  )
}

export default ProfileInfoForm