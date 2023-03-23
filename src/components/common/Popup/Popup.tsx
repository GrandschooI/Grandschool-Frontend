import React, { PropsWithChildren, ReactNode } from 'react'

import '../../../style.scss'
import cn from 'classnames'

import { getThemeStyle } from '../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../utils/Hooks/useAppSelector'
import LogoWordsWhiteThemeForLogin from '../../SVGConponents/Forms/LogoWordsWhiteThemeForLogin'
import LogoPicture from '../../SVGConponents/Header/LogoPicture'
import LogoPictureBlueTheme from '../../SVGConponents/Header/LogoPictureBlueTheme'
import LogoPictureWhiteTheme from '../../SVGConponents/Header/LogoPictureWhiteTheme'
import LogoPictureYellowTheme from '../../SVGConponents/Header/LogoPictureYellowTheme'
import LogoWords from '../../SVGConponents/Header/LogoWords'
import LogoWordsBlueTheme from '../../SVGConponents/Header/LogoWordsBlueTheme'
import LogoWordsYellowTheme from '../../SVGConponents/Header/LogoWordsYellowTheme'

import s from './Popup.module.scss'

const Popup: React.FC<PropsWithChildren<ReactNode>> = ({ children }) => {
  const blindMode = useAppSelector(getThemeStyle)
  const themeStyle = useAppSelector(getThemeStyle)

  return (
    <div className={cn(s.popupWrapper, themeStyle ? s[themeStyle] : '')}>
      <div className={cn(s.popupHeader, 'popupHeader')}>
        {!blindMode && <LogoPicture />}
        {themeStyle === 'yellowTheme' && <LogoPictureYellowTheme />}
        {themeStyle === 'whiteTheme' && <LogoPictureWhiteTheme />}
        {themeStyle === 'blueTheme' && <LogoPictureBlueTheme />}
        {!blindMode && <LogoWords />}
        {themeStyle === 'yellowTheme' && <LogoWordsYellowTheme />}
        {themeStyle === 'whiteTheme' && <LogoWordsWhiteThemeForLogin />}
        {themeStyle === 'blueTheme' && <LogoWordsBlueTheme />}
      </div>
      <div>{children}</div>
    </div>
  )
}

export default Popup
