import React, { useEffect } from 'react'

import cn from 'classnames'
import { useDispatch } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import {
  setFontSizeMode,
  setImgAvailability,
  setThemeStyleMode,
} from '../../../Redux/reducers/styleSlice'
import {
  getFontSize,
  getImgAvailability,
  getOptionsState,
  getStyleMode,
  getThemeStyle,
} from '../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../utils/Hooks/useAppSelector'

import s from './BlindModeOptions.module.scss'

const BlindModeOptions = () => {
  const dispatch = useDispatch()
  const fontSizeFromLocalStorage = localStorage.getItem('fontSizeFromLocalStorage')
  const themeStyleFromLocalStorage = localStorage.getItem('themeStyleFromLocalStorage')
  const imagesFromLocalStorage = localStorage.getItem('imagesFromLocalStorage')
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)
  const blindMode = useAppSelector(getStyleMode)
  const isOptionsOpen = useAppSelector(getOptionsState)
  const images = useAppSelector(getImgAvailability)

  useEffect(() => {
    if (blindMode) {
      if (fontSizeFromLocalStorage) {
        if (fontSize !== fontSizeFromLocalStorage) {
          dispatch(setFontSizeMode({ fontSizeMode: fontSizeFromLocalStorage }))
        }
      }
      if (themeStyleFromLocalStorage) {
        if (themeStyle !== themeStyleFromLocalStorage) {
          dispatch(setThemeStyleMode({ themeStyleMode: themeStyleFromLocalStorage }))
        }
      }
      if (imagesFromLocalStorage === 'false') {
        images && dispatch(setImgAvailability({ imgAvailabilityMode: false }))
      }
    }
  })
  const isFontSizeActive = (fontSizeMode: string) => (fontSize === fontSizeMode ? s.active : '')
  const isThemeStyleActive = (themeStyleMode: string) =>
    themeStyle === themeStyleMode ? s.active : ''

  return (
    <CSSTransition
      in={blindMode && isOptionsOpen}
      timeout={300}
      classNames={{
        enter: s.optionEnter,
        enterActive: s.optionEnterActive,
        exitActive: s.optionExitActive,
      }}
      unmountOnExit
    >
      <section
        className={cn(s.optionsBlock, s.active, s[themeStyle ? themeStyle : ''], s[fontSize])}
      >
        <div className={cn(s.optionsWrap, 'container')}>
          <div>
            <span className={cn(s.optionLabel, s.first)}>Rozmiar czcionki:</span>
            <button
              className={cn(s.button, s.small, isFontSizeActive('small'))}
              onClick={() => {
                dispatch(setFontSizeMode({ fontSizeMode: 'small' }))
                window.localStorage.setItem('fontSizeFromLocalStorage', 'small')
              }}
            >
              A
            </button>
            <button
              className={cn(s.button, s.medium, isFontSizeActive('medium'))}
              onClick={() => {
                dispatch(setFontSizeMode({ fontSizeMode: 'medium' }))
                window.localStorage.setItem('fontSizeFromLocalStorage', 'medium')
              }}
            >
              A
            </button>
            <button
              className={cn(s.button, s.large, isFontSizeActive('large'))}
              onClick={() => {
                dispatch(setFontSizeMode({ fontSizeMode: 'large' }))
                window.localStorage.setItem('fontSizeFromLocalStorage', 'large')
              }}
            >
              A
            </button>
          </div>

          <div>
            <span className={s.optionLabel}>Kolor:</span>
            <button
              className={cn(s.button, s.yellow, isThemeStyleActive('yellowTheme'))}
              onClick={() => {
                dispatch(setThemeStyleMode({ themeStyleMode: 'yellowTheme' }))
                window.localStorage.setItem('themeStyleFromLocalStorage', 'yellowTheme')
              }}
            >
              K
            </button>
            <button
              className={cn(s.button, s.white, isThemeStyleActive('whiteTheme'))}
              onClick={() => {
                dispatch(setThemeStyleMode({ themeStyleMode: 'whiteTheme' }))
                window.localStorage.setItem('themeStyleFromLocalStorage', 'whiteTheme')
              }}
            >
              K
            </button>
            <button
              className={cn(s.button, s.blue, isThemeStyleActive('blueTheme'))}
              onClick={() => {
                dispatch(setThemeStyleMode({ themeStyleMode: 'blueTheme' }))
                window.localStorage.setItem('themeStyleFromLocalStorage', 'blueTheme')
              }}
            >
              K
            </button>
          </div>

          <div>
            <span className={s.optionLabel}>Obrazy:</span>
            <button
              className={cn(s.button, s.images, s.active, s.imagesSwitcher)}
              onClick={() => {
                if (images) {
                  dispatch(setImgAvailability({ imgAvailabilityMode: !images }))
                  window.localStorage.setItem('imagesFromLocalStorage', 'false')
                } else {
                  dispatch(setImgAvailability({ imgAvailabilityMode: !images }))
                  window.localStorage.setItem('imagesFromLocalStorage', 'true')
                }
              }}
            >
              <span className={s.pics}>{images ? 'Wyłącz' : 'Włącz'}</span>
            </button>
          </div>
        </div>
      </section>
    </CSSTransition>
  )
}

export default BlindModeOptions
