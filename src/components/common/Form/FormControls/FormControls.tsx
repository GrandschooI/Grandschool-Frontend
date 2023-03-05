import React, {MouseEvent, useState} from 'react'
import {Field} from 'formik'
import cn from 'classnames'
import EyeIcon from '../../../SVGConponents/Forms/EyeIcon'
import CrossEyeIcon from '../../../SVGConponents/Forms/CrossEyeIcon'
import s from './FormControls.module.scss'
import {Nullable} from "../../../../Redux/redux-toolkit-store";

export const TextField: React.FC<propsForTextFieldType> = (
  {
    type, name, placeholder, className, validators,
      propValue
  }) => {
  const [value, setValue] = useState(type)
  const fieldTextType = 'text'
  const fieldPasswordType = 'password'
  const onChange = (e: MouseEvent) => {
    e.preventDefault()
    setValue(value === fieldPasswordType ? fieldTextType : fieldPasswordType)
  }
  return (
    <div className={s.inputWrap}>
      <Field type={value}
             name={name}
             placeholder={placeholder}
             className={className}
             validate={validators}
             value={propValue}
      />
      {type === 'password' && value === fieldPasswordType && <button onClick={onChange} className={s.changeType}>
          <EyeIcon/>
      </button>}
      {type === 'password' && value === fieldTextType &&
          <button onClick={onChange} className={cn(s.changeType, s.hidePassword)}>
              <CrossEyeIcon/>
          </button>}
    </div>
  )
}

export const RadioButton: React.FC<propsForRadioType> = ({
                                                           name, className,
                                                           errorClassname, label,
                                                           propValue, getRadioStatus, checked
                                                         }) => {

  const onClickHandler = () => {
    getRadioStatus && getRadioStatus(propValue)
  }
  return (
    <div className={s.inputWrap}>
      <Field type="radio"
             name={name}
             value={propValue}
             className={className}
             errorclassname={errorClassname}
             onClick={onClickHandler}
             checked={checked}
      />
      {label && <span className={'radioLabel'}>{label}</span>}
    </div>
  )
}

export const Checkbox: React.FC<propsForCheckboxType> = ({
                                                           name, className,
                                                           errorClassname, label,
                                                           propValue
                                                         }) => {

  const [checkboxStatus, setCheckboxStatus] = useState(false)
  const checkboxStatusHandler = () => {
    setCheckboxStatus(!checkboxStatus)
  }

  return (
    <div className={s.inputWrap}>
      <Field type="checkbox"
             name={name}
             className={className}
             errorclassname={errorClassname}
             value={propValue}
             checked={checkboxStatus}
             onClick={checkboxStatusHandler}
      />
      {label && <span className={'checkboxLabel'}>{label}</span>}
    </div>
  )
}


type propsForTextFieldType = {
  type: string
  name: string
  placeholder?: string
  className?: string
  validators?: object
  changeToText?: boolean,
  propValue?: Nullable<string>,
}
type propsForRadioType = {
  name: string
  className?: string
  errorClassname?: string
  label: string
  propValue: string,
  checked?: boolean,
  handleChange: () => void
  getRadioStatus?: (status: string) => void

}
type propsForCheckboxType = {
  name: string
  className?: string
  errorClassname?: string
  label: string
  propValue: boolean
}