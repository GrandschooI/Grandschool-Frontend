import React from 'react'
import cn from 'classnames'
import GlassesIcon from '../../SVGConponents/BlindButton/GlassesIcon'
import EyesIcon from '../../SVGConponents/BlindButton/EyesIcon'
import s from './BlindButton.module.scss'
import {Nullable} from '../../../Redux/redux-store'

type propsType = {
    blindMode: boolean
    themeStyle: Nullable<string>
    images?: boolean
    fontSize: Nullable<string>
    switchBlindModeAC: () => void
}

const BlindButton: React.FC<propsType> = ({blindMode, themeStyle,  fontSize,
                                              switchBlindModeAC}) => {
  return (
    <button className={cn(s.blindButton, 'blindButton', s[themeStyle ? themeStyle : ''], s[fontSize ? fontSize : ''])}
      onClick={() => {
        if (blindMode) {
          switchBlindModeAC()
          window.localStorage.removeItem('blindModeFromLocalStorage')
        }else {
          switchBlindModeAC()
          window.localStorage.setItem('blindModeFromLocalStorage', 'true')
        }
      }}>
      {!blindMode && <GlassesIcon/>}
      {blindMode && <EyesIcon/>}
      {blindMode ? 'Zwykły wygląd' : 'Słaby wzrok?'}
    </button>
  )
}

export default BlindButton