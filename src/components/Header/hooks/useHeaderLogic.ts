import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { setOptionsMode, switchBlindMode } from '../../../Redux/reducers/styleSlice'
import {
  getFontSize,
  getOptionsState,
  getStyleMode,
  getThemeStyle,
} from '../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../utils/Hooks/useAppSelector'

export const useHeaderLogic = () => {
  const blindModeFromLocalStorage = localStorage.getItem('blindModeFromLocalStorage')
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)
  const blindMode = useAppSelector(getStyleMode)
  const isOptionsOpen = useAppSelector(getOptionsState)
  const isMainPage = useLocation().pathname === '/'
  const mobileWindowSize = window.screen.width <= 768
  const dispatch = useDispatch()

  const [isBurgerActive, setBurgerClass] = useState(false)

  const toggleBurgerMenu = () => setBurgerClass(false)

  const toggleBlindModeHandler = () => {
    dispatch(switchBlindMode({ blindMode: !blindMode }))
  }
  const onBurgerClickHandler = () => {
    setBurgerClass(!isBurgerActive)
    if (isOptionsOpen) {
      dispatch(setOptionsMode({ optionsMode: !isOptionsOpen }))
    }
  }
  const optionsModeHandler = () => {
    dispatch(setOptionsMode({ optionsMode: !isOptionsOpen }))
    if (isBurgerActive) {
      setBurgerClass(false)
    }
  }

  useEffect(() => {
    if (blindModeFromLocalStorage) {
      dispatch(switchBlindMode({ blindMode: true }))
    }
  }, [blindModeFromLocalStorage])

  return {
    themeStyle,
    fontSize,
    isMainPage,
    mobileWindowSize,
    blindMode,
    isBurgerActive,
    toggleBurgerMenu,
    toggleBlindModeHandler,
    onBurgerClickHandler,
    optionsModeHandler,
    isOptionsOpen,
  }
}
