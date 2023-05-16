import React, { FC, useEffect, useState } from 'react'

import './dataPicker.scss'

import { useField } from 'formik'
import DatePicker from 'react-datepicker'

import FormErrorMessage from '../../../../../utils/FormErrorMessage/FormErrorMessage'

const DatePickerWrapper: FC<{ birthDate: Date | null }> = ({ birthDate }) => {
  const [startDate, setStartDate] = useState(birthDate !== null ? birthDate : new Date())
  const [field, meta, helpers] = useField('birthday')

  useEffect(() => {
    helpers.setValue(startDate)
  }, [startDate])

  return (
    <>
      <DatePicker
        showYearDropdown
        yearDropdownItemNumber={15}
        selected={startDate}
        {...field}
        onChange={(date: Date) => setStartDate(date)}
      />
      {meta.error && meta.error && <FormErrorMessage>{meta.error}</FormErrorMessage>}
    </>
  )
}

export default DatePickerWrapper
