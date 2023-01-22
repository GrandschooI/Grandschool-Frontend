import React, {PropsWithChildren} from 'react'
import s from './FormErrorMessage.module.scss'

const FormErrorMessage: React.FC<PropsWithChildren<React.ReactNode>> = ({children}) => {
  return (
    <div className={s.errorMessage}>
      {children}
    </div>
  )
}

export default FormErrorMessage
