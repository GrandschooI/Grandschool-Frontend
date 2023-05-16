import React from 'react'

import cn from 'classnames'

import { Nullable } from '../../../Redux/redux-toolkit-store'
import { activeFontSize, activeThemeStyle } from '../../../utils/scaffolding'
import EyesIcon from '../../SVGConponents/BlindButton/EyesIcon'
import GlassesIcon from '../../SVGConponents/BlindButton/GlassesIcon'

import s from './BlindButton.module.scss'

type propsType = {
  blindMode: boolean
  themeStyle: Nullable<string>
  images?: boolean
  fontSize: Nullable<string>
  switchBlindModeAC: () => void
}

const BlindButton: React.FC<propsType> = ({
  blindMode,
  themeStyle,
  fontSize,
  switchBlindModeAC,
  images,
}) => {
  return (
    <button
      className={cn(
        s.blindButton,
        'blindButton',
        s[activeThemeStyle(themeStyle)],
        s[activeFontSize(fontSize)]
      )}
      onClick={() => {
        if (blindMode) {
          switchBlindModeAC()
          window.localStorage.removeItem('blindModeFromLocalStorage')
        } else {
          switchBlindModeAC()
          window.localStorage.setItem('blindModeFromLocalStorage', 'true')
        }
      }}
    >
      {!blindMode && images && <GlassesIcon />}
      {blindMode && images && <EyesIcon />}
      {blindMode ? 'Zwykły wygląd' : 'Słaby wzrok?'}
    </button>
  )
}

export default BlindButton
