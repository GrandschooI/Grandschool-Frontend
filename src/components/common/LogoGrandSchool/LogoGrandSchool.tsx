import React from 'react'

import { getStyleMode, getThemeStyle } from '../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../utils/Hooks/useAppSelector'
import s from '../../Header/Header.module.scss'
import LogoPicture from '../../SVGConponents/Header/LogoPicture'
import LogoPictureBlueTheme from '../../SVGConponents/Header/LogoPictureBlueTheme'
import LogoPictureWhiteTheme from '../../SVGConponents/Header/LogoPictureWhiteTheme'
import LogoPictureYellowTheme from '../../SVGConponents/Header/LogoPictureYellowTheme'
import LogoWords from '../../SVGConponents/Header/LogoWords'
import LogoWordsBlueTheme from '../../SVGConponents/Header/LogoWordsBlueTheme'
import LogoWordsWhiteTheme from '../../SVGConponents/Header/LogoWordsWhiteTheme'
import LogoWordsYellowTheme from '../../SVGConponents/Header/LogoWordsYellowTheme'

export const LogoGrandSchool = () => {
  const blindMode = useAppSelector(getStyleMode)
  const themeStyle = useAppSelector(getThemeStyle)

  return (
    <>
      <a href="/" className={s.logoWrap} rel="noreferrer">
        {!blindMode && <LogoPicture />}
        {themeStyle === 'yellowTheme' && <LogoPictureYellowTheme />}
        {themeStyle === 'whiteTheme' && <LogoPictureWhiteTheme />}
        {themeStyle === 'blueTheme' && <LogoPictureBlueTheme />}
        {!blindMode && <LogoWords />}
        {themeStyle === 'yellowTheme' && <LogoWordsYellowTheme />}
        {themeStyle === 'whiteTheme' && <LogoWordsWhiteTheme />}
        {themeStyle === 'blueTheme' && <LogoWordsBlueTheme />}
      </a>
    </>
  )
}
