import React from 'react'

import cn from 'classnames'
import ReactPlayer from 'react-player/youtube'

import { getThemeStyle } from '../../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../../utils/Hooks/useAppSelector'
import { activeThemeStyle } from '../../../../utils/scaffolding'

import s from './Greetings.module.scss'

const Greetings = () => {
  const themeStyle = useAppSelector(getThemeStyle)

  return (
    <section className={cn(s.videoBlock, s[activeThemeStyle(themeStyle)])}>
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
