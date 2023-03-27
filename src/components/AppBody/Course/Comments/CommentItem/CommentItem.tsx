import React, { FC, memo, useState } from 'react'

import s from './CommentItem.module.scss'

type PropsType = {}

export const CommentItem: FC<PropsType> = memo(() => {
  const [isAnswer, setIsAnswer] = useState(false)
  const openAnswerArea = (status: boolean) => () => setIsAnswer(status)

  const sendAnswer = () => {
    alert('Send answer')
    setIsAnswer(false)
  }

  return (
    <div className={s.comment}>
      <div className={s.profile_wrapper}>
        <img className={s.avatar} src="" alt="" />
        <div className={s.profile_info}>
          <p className={s.name}>Евгения</p>
          <p className={s.time}>12 июня 2022 в 14:46</p>
        </div>
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
          <button onClick={sendAnswer}>Опубликовать</button>
        </div>
      )}
    </div>
  )
})
