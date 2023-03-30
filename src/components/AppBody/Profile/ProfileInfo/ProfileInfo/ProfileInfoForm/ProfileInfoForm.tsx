import React, { useState } from 'react'

import './dataPicker.scss'
import cn from 'classnames'
import { Form, Formik } from 'formik'
import DatePicker from 'react-datepicker'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'

import FormErrorMessage from '../../../../../utils/FormErrorMessage/FormErrorMessage'

import s from './ProfileInfoForm.module.scss'

import { RadioButton, TextField } from 'components/common/Form/FormControls/FormControls'
import { setProfileInfoFormThunkCreator } from 'Redux/reducers/userSlice'
import { getFontSize, getThemeStyle } from 'Redux/selectors/styleSelector'
import { getUserCity, getUserCountry, getUserId, getUserName } from 'Redux/selectors/userSelector'
import { useAppSelector } from 'utils/Hooks/useAppSelector'

import '../../../../../../style.scss'

const profileInfoFormSchema = yup.object().shape({
  name: yup.string(),
  birthDate: yup.date(),
  country: yup.string(),
  city: yup.string(),
  aboutUserText: yup.string(),
})

const ProfileInfoForm = () => {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token') as string

  const currentUserId = useAppSelector(getUserId)
  const currentUserName = useAppSelector(getUserName)
  const currentUserCountry = useAppSelector(getUserCountry)
  const currentUserCity = useAppSelector(getUserCity)
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)
  // const currentUserDescription = useAppSelector(getUserDescription)

  const [startDate, setStartDate] = useState(new Date())
  const [statusAssessment, setStatusAssessment] = useState('')

  const getRadioStatus = (status: string) => {
    setStatusAssessment(status)
  }

  return (
    <Formik
      initialValues={{
        name: currentUserName,
        gender: statusAssessment,
        birthday: new Date(),
        country: currentUserCountry,
        city: currentUserCity,
        description: '',
      }}
      validationSchema={profileInfoFormSchema}
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={formData => {
        dispatch(setProfileInfoFormThunkCreator(currentUserId, token, formData))
      }}
    >
      {({ touched, errors, values, handleChange }) => (
        <Form className={cn(s.profileInfoForm, s[themeStyle ? themeStyle : ''], s[fontSize])}>
          <label className="formLabel">
            <div className={s.fullName}>
              <span>Full name</span>
              {TextField({
                type: 'text',
                name: 'name',
                propValue: values.name,
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
            <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
            {errors.birthday && touched.birthday && (
              <FormErrorMessage>{errors.birthday}</FormErrorMessage>
            )}
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
              value={values.description}
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
