import React, {useState} from 'react'
import DatePicker from 'react-datepicker';
import './dataPicker.scss'
import s from './ProfileInfoForm.module.scss'
import {Form, Formik} from 'formik';
import {RadioButton, TextField} from '../../../../../common/Form/FormControls/FormControls';
import '../../../../../../style.scss'
import {Nullable} from '../../../../../../Redux/redux-store';
import * as yup from 'yup'

const profileInfoFormSchema = yup.object().shape({})

const ProfileInfoForm: React.FC<propsType> = ({
                                                  name,
                                                  sex,
                                                  country,
                                                  city,
                                                  aboutUserText,
                                                  setProfileInfo
                                              }) => {
    const [startDate, setStartDate] = useState(new Date())
    const [aboutMeDescription, setAboutMeDescription] = useState('')
    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setAboutMeDescription(e.target.value);
    };
    return (
        <Formik
            initialValues={{name: '', gender: '', birthDate: new Date(), country: '', city: '', aboutUserText: ''}}
            onSubmit={(formData) => {
                setProfileInfo(formData.name, formData.gender, formData.birthDate, formData.country, formData.city, '')
            }}
        >
            {({isSubmitting}) => (
                <Form className={s.profileInfoForm}>
                    <label className={'formLabel'}>
                        <span>Full name</span>
                        {TextField({
                            type: 'text',
                            name: 'name',
                            placeholder: 'Wpisz Name',
                            className: `textField`,
                            errorClassname: `errorTextField`,
                            propValue: name ? name : ''
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

type propsType = {
    name: Nullable<string>
    sex: Nullable<string>
    birthData: Nullable<Date>
    country: Nullable<string>
    city: Nullable<string>
    aboutUserText: Nullable<string>
    setProfileInfo: (name: string, gender: string, birthDate: Date, country: string, city: string, aboutUserText: string) => void
}