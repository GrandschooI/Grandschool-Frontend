import React from 'react'
import s from './News.module.scss'

const News = () => {
  return (
    <ul className={s.newsList}>
      <li className={s.newsItem}>
        <span>09.03.2021</span>
        <h3>W Krakowie odbędzie się festiwal nauki obsługi komputera dla emerytów</h3>
        <p>
                    Festiwal odbędzie się 13 marca w godzinach 15:00 - 17:00 przy Aleji 29 Listopada.
        </p>
      </li>

      <li className={s.newsItem}>
        <span>04.03.2021</span>
        <h3>Emeryci z Warszawy walczą o nagrody w konkursie wideo</h3>
        <p>
                    W dniu 26 lutego w Warszawie oraz organizacja społeczna Emeryci-Online
                    zainicjował konkurs "Making a Video" dla przedstawicieli starszego pokolenia.
                    Emeryci będą musieli nagrywać i montować klipy wideo, aby wyraźnie pokazać, co
                    Będą musieli nakręcić i zmontować filmy, aby zademonstrować, jakie umiejętności zdobyli podczas webinariów projektu GrandSchool.
        </p>
      </li>
    </ul>
  )
}

export default News