import React from 'react'

import cn from 'classnames'
import ReactPlayer from 'react-player/youtube'

import {
  getOptionsState,
  getStyleMode,
  getThemeStyle,
} from '../../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../../utils/Hooks/useAppSelector'

import s from './Greetings.module.scss'

const Greetings = () => {
  const blindMode = useAppSelector(getStyleMode)
  const themeStyle = useAppSelector(getThemeStyle)
  const isOptionsOpen = useAppSelector(getOptionsState)

  const isBlindActive = () => (blindMode && isOptionsOpen ? s.blindVideoBlock : '')

  return (
    <section className={cn(s.videoBlock, s[themeStyle ? themeStyle : ''], isBlindActive())}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=S_zMbLa_nAE"
        controls={true}
        loop={true}
        width={'861px'}
        height={'485px'}
        className={s.video}
      />
    </section>
  )
}

export default Greetings
