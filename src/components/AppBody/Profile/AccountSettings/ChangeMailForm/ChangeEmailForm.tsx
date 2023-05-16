import React from 'react'

import '../../../../../style.scss'
import cn from 'classnames'
import { Form, Formik } from 'formik'
import * as yup from 'yup'

import { activeThemeStyle } from '../../../../../utils/scaffolding'
import FormErrorMessage from '../../../../utils/FormErrorMessage/FormErrorMessage'

import s from './ChangeEmailForm.module.scss'

import { TextField } from 'components/common/Form/FormControls/FormControls'
import { getFontSize, getThemeStyle } from 'Redux/selectors/styleSelector'
import { useAppSelector } from 'utils/Hooks/useAppSelector'

type propsType = {}
const changeEmailValidationSchema = yup.object().shape({
  email: yup.string().email().required(),
})
const ProfileInfoForm: React.FC<propsType> = () => {
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={changeEmailValidationSchema}
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={() => {}}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className={cn(s.changeEmailForm, s[activeThemeStyle(themeStyle)], s[fontSize])}>
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
            <button type="submit" className={s.btn}>
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
