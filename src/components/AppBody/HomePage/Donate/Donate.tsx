import React from 'react'

import cn from 'classnames'

import {
  getFontSize,
  getImgAvailability,
  getThemeStyle,
} from '../../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../../utils/Hooks/useAppSelector'

import s from './Donate.module.scss'

const Donate = () => {
  const images = useAppSelector(getImgAvailability)
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)

  const withoutImgClassName = images ? '' : 'withoutImg'

  return (
    <section
      className={cn(
        s.donateSection,
        s[themeStyle ? themeStyle : ''],
        s[withoutImgClassName],
        s[fontSize ? fontSize : '']
      )}
    >
      <div className={cn('container')}>
        <div className={s.contentWrap}>
          <h2>
            Тo wszystko może się stać <strong>z twoją pomocą</strong>
          </h2>
          <p>Wnieś swój wkład w rozwój swoich bliskich</p>
          <a
            className={s[themeStyle ? themeStyle : '']}
            href="https://zrzutka.pl/znu2ed"
            rel="noreferrer"
          >
            Wesprzyj nas
          </a>
        </div>
      </div>
    </section>
  )
}

export default Donate
