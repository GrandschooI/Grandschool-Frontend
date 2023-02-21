import React, {ChangeEvent, KeyboardEvent, useEffect, useRef, useState} from 'react';
import Popup from "../../common/Popup/Popup";
import cn from "classnames";
import s from './CourseActivation.module.scss'


let currentOtpIndex: number = 0;
const CourseActivation = () => {
  const [otp, setOtp] = useState<Array<string>>(new Array(5).fill(''))
  const [activeOtpIndex, setActiveOtpIndex] = useState<number>(0)


  const inputRef = useRef<HTMLInputElement>(null)

  const onChangeHandle = ({currentTarget}: ChangeEvent<HTMLInputElement>): void => {
    const {value} = currentTarget
    const newOTP = [...otp]
    newOTP[currentOtpIndex] = value.substring(value.length - 1)
    if(!value) setActiveOtpIndex(currentOtpIndex - 1)
    else setActiveOtpIndex(currentOtpIndex + 1)
    setOtp(newOTP)
  }

  const onKeyDownHandle = ({key}: KeyboardEvent<HTMLInputElement>, index: number) => {
    currentOtpIndex = index
    if(key === 'Backspace') {
      setActiveOtpIndex(currentOtpIndex - 1)
    }
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [activeOtpIndex])

  return (
    <div className={cn(s.courseActivationBody, 'container')}>
      <h2>Активация курса</h2>
      <Popup>
        <p className={s.bodyDescription}>Что бы активировать курс, вам необходимо ниже ввести 5-значный пароль из e-mail
          сообщения:</p>
        <div className={s.bodyBoxCode}>
          {
            otp.map((_, index) => {
              return (
                <input
                  key={index}
                  ref={activeOtpIndex === index ? inputRef : null}
                  type="number"
                  value={otp[index]}
                  onChange={onChangeHandle}
                  onKeyDown={(e) => onKeyDownHandle(e, index)}
                />
              )
            })
          }
        </div>
        <div style={{textAlign: "center"}}>
          <button type="button" className={s.btn}>Активировать</button>
        </div>
      </Popup>
    </div>
  );
};

export default CourseActivation;