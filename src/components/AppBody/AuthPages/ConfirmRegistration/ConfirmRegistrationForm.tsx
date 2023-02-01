import React from 'react'
import {Form, Formik} from 'formik'
import cn from 'classnames'
import {TextField} from '../../../common/Form/FormControls/FormControls'
import s from './ConfirmRegistration.module.scss'
import '../../../../style.scss'
import 'react-toastify/dist/ReactToastify.css'
import {Nullable} from '../../../../Redux/redux-store'
import * as yup from 'yup'
import FormErrorMessage from '../../../utils/FormErrorMessage/FormErrorMessage';

const confirmRegistrationFormSchema = yup.object().shape({
  confirmationCode: yup.number().required('Code is required')
})

const confirmRegistrationForm: React.FC<propsType> = ({onSubmit, themeStyle, fontSize}) => {
  return (
    <div className={cn(s.confirmRegistrationWrap, themeStyle ? themeStyle : '', s[themeStyle ? themeStyle : ''],
      s[fontSize ? fontSize : ''], [fontSize ? fontSize : ''])}>
      <Formik
        initialValues={{confirmationCode: ''}}
        validationSchema={confirmRegistrationFormSchema}
        onSubmit={onSubmit}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({isSubmitting, touched, errors}) => (
          <Form>
            <label className={cn(s.confirmLabel, 'formLabel')}>
              <span>Confirmation code was sent to:</span>
              <p className={s.phone}>+ 380 (50) - 888 - 28 - **</p>
              {TextField({
                type: 'number',
                name: 'confirmationCode',
                placeholder: 'Enter the code from the message',
                  className: `textField ${errors.confirmationCode && touched.confirmationCode ? 'errorTextField' : ''}`
              })}
              {errors.confirmationCode && touched.confirmationCode &&
                  <FormErrorMessage>{errors.confirmationCode}</FormErrorMessage>}
            </label>
            <div className={s.buttonWrapper}>
              <button type="submit" disabled={isSubmitting} className={cn(s.goBack, 'submitBtn')}>
                Back
              </button>
              <button type="submit" disabled={isSubmitting} className={cn(s.continue, 'submitBtn')}>
                Wyślij
              </button>
            </div>
            <button className={s.repeatCode}>I didn't get a code</button>
          </Form>
        )}
      </Formik>
      <div>
        <label className={cn(s.confirmLabel, 'formLabel')}>
          <span>Confirm your email address. Please check your mailbox and follow the instructions below. Email sent to: </span>
          <p className={s.phone}>test@gmail.com</p>
        </label>
        <div className={s.buttonWrapper}>
          <button className={cn(s.goBack, 'submitBtn')}>
            Back
          </button>
          <button className={cn(s.continue, 'submitBtn')}>
            Ok
          </button>
        </div>
        <button className={s.repeatCode}>I didn't get a code</button>
      </div>
    </div>
  )
}

export default confirmRegistrationForm

type propsType = {
  onSubmit: (formData: any) => void
  themeStyle: Nullable<string>
  fontSize: Nullable<string>
}
