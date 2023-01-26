import React, {useState} from 'react'
import DatePicker from 'react-datepicker';
import './dataPicker.scss'
import s from './ProfileInfoForm.module.scss'
import {Form, Formik} from 'formik';
import {RadioButton, TextField} from '../../../../../common/Form/FormControls/FormControls';
import '../../../../../../style.scss'
import * as yup from 'yup'
import {useAppSelector} from '../../../../../../utils/Hooks/useAppSelector';
import {
  getAboutUserText,
  getUserBirthData,
  getUserCity,
  getUserCountry,
  getUserName,
  getUserSex
} from '../../../../../../Redux/selectors/userSelector';
import {useDispatch} from 'react-redux';
import {userActions} from '../../../../../../Redux/reducers/userReducer';

const profileInfoFormSchema = yup.object().shape({
  name: yup.string(),
  birthDate: yup.date(),
  country: yup.string(),
  city: yup.string().required(),
  aboutUserText: yup.string()
})

const ProfileInfoForm = () => {
  const name = useAppSelector(getUserName)
  const country = useAppSelector(getUserCountry)
  const sex = useAppSelector(getUserSex)
  const birthData = useAppSelector(getUserBirthData)
  const city = useAppSelector(getUserCity)
  const aboutUserText = useAppSelector(getAboutUserText)

  const {setProfileInfo} = userActions
  const dispatch = useDispatch()
  const [startDate, setStartDate] = useState(new Date())
  const [aboutMeDescription, setAboutMeDescription] = useState('')
  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setAboutMeDescription(e.target.value);
  };
  return (
    <Formik
      initialValues={{name: '', gender: '', birthDate: new Date(), country: '', city: '', aboutUserText: ''}}
      validationSchema={profileInfoFormSchema}
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={(formData) => {
        dispatch(setProfileInfo(formData.name, formData.gender, formData.birthDate, formData.country, formData.city, ''))
      }}
    >
      {({isSubmitting, touched, errors}) => (
        <Form className={s.profileInfoForm}>
          <label className={'formLabel'}>
            <span>Full name</span>
            {TextField({
              type: 'text',
              name: 'name',
              placeholder: 'Wpisz Name',
              className: `textField`,
              errorClassname: `errorTextField`,
              propValue: name ? name : '',
            })}
          </label>

          <label className={'formLabel'}>
            <span>Gender</span>
            <div className={s.radioWrap}>
              <label>
                {RadioButton({
                  name: 'gender',
                  propValue: 'male',
                  label: 'Male',
                  checked: sex === 'male',
                  handleChange: () => {
                  }
                })}
              </label>
              <label>
                {RadioButton({
                  name: 'gender',
                  propValue: 'female',
                  label: 'Female',
                  checked: sex === 'female',
                  handleChange: () => {
                  }
                })}
              </label>
            </div>
          </label>

          <label className={'formLabel'}>
            <span>Birth Date</span>
            <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)}/>
          </label>

          <label className={'formLabel'}>
            <span>Country</span>
            {TextField({
              type: 'text',
              name: 'country',
              placeholder: 'Wpisz Country',
              className: `textField`,
              errorClassname: `errorTextField`,
              propValue: country ? country : ''
            })}
          </label>

          <label className={'formLabel'}>
            <span>City</span>
            {TextField({
              type: 'text',
              name: 'city',
              placeholder: 'Wpisz City',
              className: `textField`,
              errorClassname: `errorTextField`,
              propValue: city ? city : ''
            })}
          </label>

          <label className={'formLabel'}>
            <span>A little about yourself</span>
            <textarea onChange={onChangeHandler}
                      value={aboutUserText ? aboutUserText : aboutMeDescription}
                      placeholder={'Tell us a little about yourself'}/>
          </label>
          {!isSubmitting ? <button type="submit" className="submitBtn">Wyślij</button> : <span>Pending</span>}
        </Form>
      )}
    </Formik>
  )
}

export default ProfileInfoForm

