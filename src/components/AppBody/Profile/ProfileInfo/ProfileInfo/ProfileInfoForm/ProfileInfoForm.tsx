import React, { FC, useState } from 'react'

import './dataPicker.scss'
import cn from 'classnames'
import { Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'

import { activeThemeStyle } from '../../../../../../utils/scaffolding'
import FormErrorMessage from '../../../../../utils/FormErrorMessage/FormErrorMessage'

import DatePickerWrapper from './DatePickerWrapper'
import s from './ProfileInfoForm.module.scss'

import { RadioButton, TextField } from 'components/common/Form/FormControls/FormControls'
import { setProfileInfoFormThunkCreator } from 'Redux/reducers/userSlice'
import { getFontSize, getThemeStyle } from 'Redux/selectors/styleSelector'
import { getUserId } from 'Redux/selectors/userSelector'
import { useAppSelector } from 'utils/Hooks/useAppSelector'

import '../../../../../../style.scss'

const profileInfoFormSchema = yup.object().shape({
  name: yup.string(),
  birthday: yup
    .date()
    .max(new Date(), 'Date of birth cannot be in the future')
    .typeError('Date of birth has to be a valid date'),
  country: yup.string(),
  city: yup.string(),
  description: yup.string(),
})

type PropsType = {
  initialProfileData: {
    currentUserName: null | string
    currentUserCountry: null | string
    currentUserCity: null | string
    currentUserBirthday: null | string | Date
    currentUserDescription: null | string
    currentUserGender: null | string
  }
}

const ProfileInfoForm: FC<PropsType> = ({ initialProfileData }) => {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token') as string
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)
  const currentUserId = useAppSelector(getUserId)

  const [statusAssessment, setStatusAssessment] = useState(initialProfileData.currentUserGender)

  const getRadioStatus = (status: string) => setStatusAssessment(status)

  return (
    <Formik
      initialValues={{
        name: initialProfileData.currentUserName,
        gender: statusAssessment,
        birthday: initialProfileData.currentUserBirthday,
        country: initialProfileData.currentUserCountry,
        city: initialProfileData.currentUserCity,
        description: initialProfileData.currentUserDescription,
      }}
      validationSchema={profileInfoFormSchema}
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={formData => {
        dispatch(setProfileInfoFormThunkCreator(currentUserId, token, formData))
      }}
    >
      {({ touched, errors, values, handleChange }) => (
        <Form className={cn(s.profileInfoForm, s[activeThemeStyle(themeStyle)], s[fontSize])}>
          <label className="formLabel">
            <div className={s.fullName}>
              <span>Full name</span>
              {TextField({
                type: 'text',
                name: 'name',
                propValue: values?.name,
                placeholder: 'Wpisz Name',
                className: `textField ${errors.name && touched.name ? 'errorTextField' : ''}`,
              })}
              {errors.name && touched.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
            </div>
          </label>
          <label className="formLabel">
            <div className={s.gender}>
              <span>Gender</span>
              <div className={s.radioWrap}>
                <label>
                  {RadioButton({
                    name: 'gender',
                    propValue: 'male',
                    label: 'Male',
                    checked: statusAssessment === 'male',
                    getRadioStatus: getRadioStatus,
                    handleChange: () => {},
                  })}
                </label>
                <label>
                  {RadioButton({
                    name: 'gender',
                    propValue: 'female',
                    label: 'Female',
                    checked: statusAssessment === 'female',
                    getRadioStatus: getRadioStatus,
                    handleChange: () => {},
                  })}
                </label>
              </div>
            </div>
          </label>
          <label className={'formLabel'}>
            <span>Birth Date</span>
            <DatePickerWrapper birthDate={initialProfileData.currentUserBirthday as Date} />
          </label>
          <label className={'formLabel'}>
            <span>Country</span>
            {TextField({
              type: 'text',
              name: 'country',
              propValue: values.country,
              placeholder: 'Wpisz Country',
              className: `textField ${errors.country && touched.country ? 'errorTextField' : ''}`,
            })}
            {errors.country && touched.country && (
              <FormErrorMessage>{errors.country}</FormErrorMessage>
            )}
          </label>

          <label className={'formLabel'}>
            <span>City</span>
            {TextField({
              type: 'text',
              name: 'city',
              propValue: values.city,
              placeholder: 'Wpisz City',
              className: `textField ${errors.city && touched.city ? 'errorTextField' : ''}`,
            })}
            {errors.city && touched.city && <FormErrorMessage>{errors.city}</FormErrorMessage>}
          </label>

          <label className={'formLabel'}>
            <span>A little about yourself</span>
            <textarea
              name={'description'}
              onChange={handleChange}
              value={values.description as string}
              placeholder={'Tell us a little about yourself'}
            />
          </label>
          <button type="submit" className={s.btn}>
            Wyślij
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default ProfileInfoForm
