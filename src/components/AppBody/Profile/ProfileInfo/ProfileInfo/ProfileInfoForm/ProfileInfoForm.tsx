import React, {useState} from 'react'
import DatePicker from 'react-datepicker';
import './dataPicker.scss'
import s from './ProfileInfoForm.module.scss'
import {Form, Formik} from 'formik';
import {RadioButton, TextField} from '../../../../../common/Form/FormControls/FormControls';
import '../../../../../../style.scss'
import * as yup from 'yup'
import {useAppSelector} from '../../../../../../utils/Hooks/useAppSelector';
import {useDispatch} from 'react-redux';
import {
  setProfileInfoFormThunkCreator
} from '../../../../../../Redux/reducers/userSlice';
import FormErrorMessage from '../../../../../utils/FormErrorMessage/FormErrorMessage';
import {getUserId} from "../../../../../../Redux/selectors/userSelector";

const profileInfoFormSchema = yup.object().shape({
  name: yup.string(),
  birthDate: yup.date(),
  country: yup.string(),
  city: yup.string(),
  aboutUserText: yup.string()
})

const ProfileInfoForm = () => {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token') as string

  const currentUserId = useAppSelector(getUserId)

  const [startDate, setStartDate] = useState(new Date())
  const [statusAssessment, setStatusAssessment] = useState('')


  const getRadioStatus = (status: string) => {
    setStatusAssessment(status)
  };
  return (
    <Formik
      initialValues={{
        name: '',
        gender: statusAssessment,
        birthday: new Date(),
        country: '',
        city: '',
        description: ''
      }}
      validationSchema={profileInfoFormSchema}
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={(formData) => {
        dispatch(setProfileInfoFormThunkCreator(currentUserId, token, formData))
      }}
    >
      {({touched, errors, values, handleChange}) => (
        <Form className={s.profileInfoForm}>
          <label className={'formLabel'}>
            <span>Full name</span>
            {TextField({
              type: 'text',
              name: 'name',
              placeholder: 'Wpisz Name',
              className: `textField ${errors.name && touched.name ? 'errorTextField' : ''}`
            })}
            {errors.name && touched.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
          </label>

          <label className={'formLabel'}>
            <span>Gender</span>
            <div className={s.radioWrap}>
              <label>
                {RadioButton({
                  name: 'gender',
                  propValue: 'male',
                  label: 'Male',
                  checked: statusAssessment === 'male',
                  getRadioStatus: getRadioStatus,
                  handleChange: () => {
                  }
                })}
              </label>
              <label>
                {RadioButton({
                  name: 'gender',
                  propValue: 'female',
                  label: 'Female',
                  checked: statusAssessment === 'female',
                  getRadioStatus: getRadioStatus,
                  handleChange: () => {
                  }
                })}
              </label>
            </div>
          </label>

          <label className={'formLabel'}>
            <span>Birth Date</span>
            <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)}/>
            {errors.birthday && touched.birthday && <FormErrorMessage>{errors.birthday}</FormErrorMessage>}
          </label>

          <label className={'formLabel'}>
            <span>Country</span>
            {TextField({
              type: 'text',
              name: 'country',
              placeholder: 'Wpisz Country',
              className: `textField ${errors.country && touched.country ? 'errorTextField' : ''}`
            })}
            {errors.country && touched.country && <FormErrorMessage>{errors.country}</FormErrorMessage>}
          </label>

          <label className={'formLabel'}>
            <span>City</span>
            {TextField({
              type: 'text',
              name: 'city',
              placeholder: 'Wpisz City',
              className: `textField ${errors.city && touched.city ? 'errorTextField' : ''}`
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
          <button type="submit" className="submitBtn">Wyślij</button>
        </Form>
      )}
    </Formik>
  )
}

export default ProfileInfoForm

