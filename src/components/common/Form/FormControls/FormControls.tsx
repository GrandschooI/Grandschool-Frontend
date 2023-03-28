import React, { MouseEvent, useState } from 'react'

import cn from 'classnames'
import { Field } from 'formik'

import { Nullable } from '../../../../Redux/redux-toolkit-store'
import CrossEyeIcon from '../../../SVGConponents/Forms/CrossEyeIcon'
import EyeIcon from '../../../SVGConponents/Forms/EyeIcon'

import s from './FormControls.module.scss'

export const TextField: React.FC<PropsTextField> = ({
  type,
  name,
  placeholder,
  className,
  validators,
  propValue,
}) => {
  const [value, setValue] = useState(type)
  const fieldTextType = 'text'
  const fieldPasswordType = 'password'
  const showPassword = (e: MouseEvent) => {
    e.preventDefault()
    setValue(value === fieldPasswordType ? fieldTextType : fieldPasswordType)
  }

  return (
    <div className={s.inputWrap}>
      <Field
        type={value}
        name={name}
        placeholder={placeholder}
        className={className}
        validate={validators}
        value={propValue}
      />

      {type === 'password' && value === fieldPasswordType && (
        <button onClick={showPassword} className={s.changeType}>
          <EyeIcon />
        </button>
      )}
      {type === 'password' && value === fieldTextType && (
        <button onClick={showPassword} className={cn(s.changeType, s.hidePassword)}>
          <CrossEyeIcon />
        </button>
      )}
    </div>
  )
}

export const RadioButton: React.FC<PropsRadioType> = ({
  name,
  className,
  errorClassname,
  label,
  propValue,
  getRadioStatus,
  checked,
}) => {
  const onClickHandler = () => {
    getRadioStatus && getRadioStatus(propValue)
  }

  return (
    <div className={s.inputWrap}>
      <Field
        type="radio"
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

export const Checkbox: React.FC<PropsCheckBoxType<boolean>> = ({
  name,
  className,
  errorClassname,
  label,
  propValue,
}) => {
  const [checkboxStatus, setCheckboxStatus] = useState(false)
  const checkboxStatusHandler = () => {
    setCheckboxStatus(!checkboxStatus)
  }

  return (
    <div className={s.inputWrap}>
      <Field
        type="checkbox"
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
type PropsRadioType = {
  checked?: boolean
  handleChange: () => void
  getRadioStatus?: (status: string) => void
} & PropsCheckBoxType<string>

type PropsCheckBoxType<T> = {
  name: string
  className?: string
  errorClassname?: string
  label: string
  propValue: T
}

type PropsTextField = {
  type: string
  name: string
  placeholder?: string
  className?: string
  validators?: object
  changeToText?: boolean
  propValue?: Nullable<string>
}
