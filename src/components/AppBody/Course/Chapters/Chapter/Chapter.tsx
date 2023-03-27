import React from 'react'

import cn from 'classnames'
import ReactPlayer from 'react-player/youtube'

import s from './Chapter.module.scss'

const Chapter: React.FC<PropsType> = () => {
  return (
    <section className={s.chapter}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=S_zMbLa_nAE"
        controls={true}
        loop={true}
        width={'70%'}
        height={'485px'}
        className={s.movie}
      />
      <ul>
        <li>
          <h3 className={s.topicTitle}>1. Доступ к информации и её хранение</h3>

          <p>
            <strong>Задача:</strong> Интернет является огромным источником информации, и компьютер
            позволяет получить доступ к этой информации.
          </p>

          <p>
            <strong>Проблема:</strong> к сожалению, кроме полезной информации в Интернете слишком
            много мусора и ложных сведений, и в этой свалке можно запросто погрязнуть.
          </p>

          <p>
            <strong>Решение:</strong> Научиться искать качественную информацию и здраво
            анализировать её. Напишите в комментариях, хотите ли вы научиться искать информацию с
            помощью своего компьютера?
          </p>
        </li>
      </ul>

      <div className={s.questionWrap}>
        <h4 className={s.topicTitle}>
          Что бы завершить изучение материала, ответьте на контрольный вопрос:
        </h4>
        <p className={s.question}>Безопасно ли делать покупки в интернете?</p>

        <label className={s.answer}>Нет, нельзя доверять интернет-магазинам</label>
        <label className={s.answer}>Да, любая покупка в интерете - безопасная</label>
        <label className={s.answer}>
          Прежде, чем делать покупки, нужно ознакомиться с принципом выбора интернет-магазина
        </label>

        <button className={cn(s.submitBtn, 'submitBtn')}>Завершить изучение главы</button>
      </div>

      <div>
        <p>Основные выводы</p>
        Итак, сегодня мы узнали, зачем обычному человеку может быть нужен компьютер. Оказывается, в
        каждом случае вы можете встретить проблемы, но всегда можно найти решение этих проблем и
        применять компьютер с наибольшей эффективностью. Напишите в комментариях, как вы используете
        компьютер, и какие темы вы бы хотели видеть в будущих IT-уроках.
      </div>

      <h3 className={s.comments_count}>Общение и обмен опытом (2 комментария):</h3>
    </section>
  )
}

export default Chapter

type PropsType = {}
