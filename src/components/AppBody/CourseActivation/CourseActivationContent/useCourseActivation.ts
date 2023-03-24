import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'

import { getFontSize, getThemeStyle } from '../../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../../utils/Hooks/useAppSelector'

export const useCourseActivation = () => {
  const [otp, setOtp] = useState<string[]>(new Array(5).fill(''))
  const [activeOtpIndex, setActiveOtpIndex] = useState<number>(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)

  const onChangeHandle = (event: ChangeEvent<HTMLInputElement>, index: number): void => {
    const { value } = event.currentTarget
    const newOtp = [...otp]

    newOtp[index] = value.substring(value.length - 1)
    setOtp(newOtp)
    setActiveOtpIndex(value ? index + 1 : index - 1)
  }

  const onKeyDownHandle = (event: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === 'Backspace') {
      setActiveOtpIndex(index - 1)
    }
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [activeOtpIndex])

  return {
    themeStyle,
    fontSize,
    otp,
    onChangeHandle,
    onKeyDownHandle,
    inputRef,
    activeOtpIndex,
  }
}
