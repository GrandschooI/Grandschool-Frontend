import React from 'react'

import cn from 'classnames'
import { NavLink, useHistory } from 'react-router-dom'

import notFoundNumber from '../../../assets/images/404.png'
import { getFontSize, getThemeStyle } from '../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../utils/Hooks/useAppSelector'
import {activeFontSize, activeThemeStyle} from '../../../utils/scaffolding'

import s from './NotFoundPage.module.scss'

const NotFound = () => {
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)

  let history = useHistory()

  return (
    <section
      className={cn(
        s.notFoundWrapper,
        s[activeThemeStyle(themeStyle)],
        activeThemeStyle(themeStyle),
        s[activeFontSize(fontSize)]
      )}
    >
      <div className={cn(s.contentWrap, 'container')}>
        <span className={s.notFoundNumber}>
          404
          <img src={notFoundNumber} alt="404" />
        </span>

        <h1>Страница не найдена</h1>
        <p>Неправильно набран адрес или такой страницы не существует</p>
        <div className={s.buttonWrap}>
          <button onClick={history.goBack} className={'inverseBtn'}>
            Назад
          </button>
          <NavLink to="/" className={'submitBtn'}>
            На главную
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default NotFound
