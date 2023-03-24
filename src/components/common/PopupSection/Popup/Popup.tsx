import React, { PropsWithChildren, ReactNode } from 'react'

import '../../../../style.scss'
import cn from 'classnames'

import { getThemeStyle } from '../../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../../utils/Hooks/useAppSelector'
import LogoWordsWhiteThemeForLogin from '../../../SVGConponents/Forms/LogoWordsWhiteThemeForLogin'
import LogoPicture from '../../../SVGConponents/Header/LogoPicture'
import LogoPictureBlueTheme from '../../../SVGConponents/Header/LogoPictureBlueTheme'
import LogoPictureWhiteTheme from '../../../SVGConponents/Header/LogoPictureWhiteTheme'
import LogoPictureYellowTheme from '../../../SVGConponents/Header/LogoPictureYellowTheme'
import LogoWords from '../../../SVGConponents/Header/LogoWords'
import LogoWordsBlueTheme from '../../../SVGConponents/Header/LogoWordsBlueTheme'
import LogoWordsYellowTheme from '../../../SVGConponents/Header/LogoWordsYellowTheme'

import s from './Popup.module.scss'
type PropsType = {
  className?: React.CSSProperties | string
  children?: PropsWithChildren<ReactNode>
}

const Popup: React.FC<PropsType> = ({ children, className = '' }) => {
  const themeStyle = useAppSelector(getThemeStyle)

  return (
    <div className={cn(`${s.popupWrapper} ${className}`, themeStyle ? s[themeStyle] : '')}>
      <div className={cn(s.popupHeader, 'popupHeader')}>
        {!themeStyle && <LogoPicture />}
        {themeStyle === 'yellowTheme' && <LogoPictureYellowTheme />}
        {themeStyle === 'whiteTheme' && <LogoPictureWhiteTheme />}
        {themeStyle === 'blueTheme' && <LogoPictureBlueTheme />}
        {!themeStyle && <LogoWords />}
        {themeStyle === 'yellowTheme' && <LogoWordsYellowTheme />}
        {themeStyle === 'whiteTheme' && <LogoWordsWhiteThemeForLogin />}
        {themeStyle === 'blueTheme' && <LogoWordsBlueTheme />}
      </div>
      <>{children}</>
    </div>
  )
}

export default Popup
