import React, { FC, memo, useState } from 'react'

import cn from 'classnames'

import s from '../CommentItem.module.scss'

import { getFontSize, getThemeStyle } from 'Redux/selectors/styleSelector'
import { useAppSelector } from 'utils/Hooks/useAppSelector'

export type PropsType = {
  withImg?: boolean
}

export const CommentBlock: FC<PropsType> = memo(({ withImg = true }) => {
  const [isAnswer, setIsAnswer] = useState(false)

  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)

  const openAnswerArea = (status: boolean) => () => setIsAnswer(status)
  const sendAnswer = () => {
    alert('Send answer')
    setIsAnswer(false)
  }

  return (
    <div className={cn(s.comment, s[themeStyle ? themeStyle : ''], 'comment', s[fontSize])}>
      {withImg && <img className={s.avatar} src="" alt="" />}
      <div className={s.profile_wrapper}>
        <div className={s.profile_info}>
          <p className={s.name}>Евгения</p>
          <p className={s.time}>12 июня 2022 в 14:46</p>
        </div>
        <div className={s.text_wrapper}>
          <p className={s.text}>
            Добрый день, спасибо за информацию. У меня есть вопрос, можно ли проходить текст заново
            или есть только одна попытка?
          </p>
          <button className={s.btn_answer} onClick={openAnswerArea(true)}>
            Ответить
          </button>
        </div>
        {isAnswer && (
          <div className={s.answer}>
            <textarea placeholder={'Оставьте свой ответ'} />
            <button onClick={sendAnswer}>Ответить</button>
          </div>
        )}
      </div>
    </div>
  )
})
