import React from 'react'
import cn from 'classnames'
import s from './ConfirmRegistration.module.scss'
import '../../../../style.scss'
import 'react-toastify/dist/ReactToastify.css'
import {Nullable} from '../../../../Redux/redux-store'
import PhoneForm from './PhoneForm/PhoneForm';


const confirmRegistrationForm: React.FC<PropsType> = ({onSubmit, themeStyle, fontSize}) => {
  return (
    <div className={cn(s.confirmRegistrationWrap, themeStyle ? themeStyle : '', s[themeStyle ? themeStyle : ''],
      s[fontSize ? fontSize : ''], [fontSize ? fontSize : ''])}>
      <PhoneForm onSubmit={onSubmit}/>
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

type PropsType = {
  onSubmit: (formData: any) => void
  themeStyle: Nullable<string>
  fontSize: Nullable<string>
}
