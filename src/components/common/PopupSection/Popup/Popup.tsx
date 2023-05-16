import React, { PropsWithChildren, ReactNode } from 'react'

import '../../../../style.scss'
import cn from 'classnames'

import { getThemeStyle } from '../../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../../utils/Hooks/useAppSelector'
import { activeThemeStyle } from '../../../../utils/scaffolding'
import LogoWordsWhiteThemeForLogin from '../../../SVGConponents/Forms/LogoWordsWhiteThemeForLogin'
import LogoPicture from '../../../SVGConponents/Header/LogoPicture'
import LogoPictureBlueThemeForLogin from '../../../SVGConponents/Header/LogoPictureBlueThemeForLogin'
import LogoPictureWhiteTheme from '../../../SVGConponents/Header/LogoPictureWhiteTheme'
import LogoPictureYellowTheme from '../../../SVGConponents/Header/LogoPictureYellowTheme'
import LogoWords from '../../../SVGConponents/Header/LogoWords'
import LogoWordsBlueThemeForLogin from '../../../SVGConponents/Header/LogoWordsBlueThemeForLogin'
import LogoWordsYellowTheme from '../../../SVGConponents/Header/LogoWordsYellowTheme'

import s from './Popup.module.scss'

type PropsType = {
  className?: React.CSSProperties | string
  children?: PropsWithChildren<ReactNode>
}

const Popup: React.FC<PropsType> = ({ children, className = '' }) => {
  const themeStyle = useAppSelector(getThemeStyle)

  return (
    <div className={cn(`${s.popupWrapper} ${className}`, activeThemeStyle(themeStyle))}>
      <div className={cn(s.popupHeader, 'popupHeader')}>
        {!themeStyle && <LogoPicture />}
        {themeStyle === 'yellowTheme' && <LogoPictureYellowTheme />}
        {themeStyle === 'whiteTheme' && <LogoPictureWhiteTheme />}
        {themeStyle === 'blueTheme' && <LogoPictureBlueThemeForLogin />}
        {!themeStyle && <LogoWords />}
        {themeStyle === 'yellowTheme' && <LogoWordsYellowTheme />}
        {themeStyle === 'whiteTheme' && <LogoWordsWhiteThemeForLogin />}
        {themeStyle === 'blueTheme' && <LogoWordsBlueThemeForLogin />}
      </div>
      <>{children}</>
    </div>
  )
}

export default Popup
