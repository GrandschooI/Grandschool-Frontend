import React from 'react'
import cn from 'classnames'
import s from './ConfirmRegistration.module.scss'
import '../../../../style.scss'
import 'react-toastify/dist/ReactToastify.css'
import {Nullable} from '../../../../Redux/redux-store'
import PhoneForm from './PhoneForm/PhoneForm';
import EmailNotification from './EmailNotification/EmailNotification';


const confirmRegistrationForm: React.FC<PropsType> = ({onSubmit, themeStyle, fontSize}) => {
  return (
    <div className={cn(s.confirmRegistrationWrap, themeStyle ? themeStyle : '', s[themeStyle ? themeStyle : ''],
      s[fontSize ? fontSize : ''], [fontSize ? fontSize : ''])}>
      <PhoneForm onSubmit={onSubmit}/>
      <EmailNotification/>
    </div>
  )
}

export default confirmRegistrationForm

type PropsType = {
  onSubmit: (formData: any) => void
  themeStyle: Nullable<string>
  fontSize: Nullable<string>
}
