import React from 'react'
import cn from 'classnames'
import s from './ConfirmRegistration.module.scss'
import '../../../../style.scss'
import 'react-toastify/dist/ReactToastify.css'
import {Nullable} from '../../../../Redux/redux-store'
import PhoneForm from './PhoneForm/PhoneForm';
import EmailNotification from './EmailNotification/EmailNotification';
import {useAppSelector} from '../../../../utils/Hooks/useAppSelector';
import {getUserEmail, getUserPhone} from '../../../../Redux/selectors/userSelector';


const ConfirmRegistrationForm: React.FC<PropsType> = ({onSubmit, themeStyle, fontSize}) => {

  const phone = useAppSelector(getUserPhone)
  const email = useAppSelector(getUserEmail)
  return (
    <div className={cn(s.confirmRegistrationWrap, themeStyle ? themeStyle : '', s[themeStyle ? themeStyle : ''],
      s[fontSize ? fontSize : ''], [fontSize ? fontSize : ''])}>
      {email && <EmailNotification email={email}/>}
      {phone && <PhoneForm onSubmit={onSubmit} userPhone={phone}/>}
    </div>
  )
}

export default ConfirmRegistrationForm

type PropsType = {
  onSubmit: (formData: any) => void
  themeStyle: Nullable<string>
  fontSize: Nullable<string>
}
