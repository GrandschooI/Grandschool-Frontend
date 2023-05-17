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
import { activeThemeStyle } from '../../../utils/scaffolding'

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

  const handleFontSizeChange = (fontSize: string) => {
    dispatch(setFontSizeMode({ fontSizeMode: fontSize }))
    window.localStorage.setItem('fontSizeFromLocalStorage', fontSize)
  }

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
        className={cn(s.optionsBlock, s.active, s[activeThemeStyle(themeStyle)], s[fontSize])}
      >
        <div className={cn(s.optionsWrap, 'container')}>
          <div>
            <span className={cn(s.optionLabel, s.first)}>Rozmiar czcionki:</span>
            <button
              className={cn(s.button, s.small, s[fontSize === 'small' ? 'active' : ''])}
              onClick={() => handleFontSizeChange('small')}
            >
              A
            </button>
            <button
              className={cn(s.button, s.medium, s[fontSize === 'medium' ? 'active' : ''])}
              onClick={() => handleFontSizeChange('medium')}
            >
              A
            </button>
            <button
              className={cn(s.button, s.large, s[fontSize === 'large' ? 'active' : ''])}
              onClick={() => handleFontSizeChange('large')}
            >
              A
            </button>
          </div>

          <div>
            <span className={s.optionLabel}>Kolor:</span>
            <button
              className={cn(s.button, s.yellow, s[activeThemeStyle(themeStyle)])}
              onClick={() => {
                dispatch(setThemeStyleMode({ themeStyleMode: 'yellowTheme' }))
                window.localStorage.setItem('themeStyleFromLocalStorage', 'yellowTheme')
              }}
            >
              K
            </button>
            <button
              className={cn(s.button, s.white, s[activeThemeStyle(themeStyle)])}
              onClick={() => {
                dispatch(setThemeStyleMode({ themeStyleMode: 'whiteTheme' }))
                window.localStorage.setItem('themeStyleFromLocalStorage', 'whiteTheme')
              }}
            >
              K
            </button>
            <button
              className={cn(s.button, s.blue, s[activeThemeStyle(themeStyle)])}
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
