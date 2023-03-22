import React, {PropsWithChildren, ReactNode} from 'react'
import s from './Popup.module.scss'
import '../../../../style.scss'
import cn from 'classnames';
import LogoPicture from '../../../SVGConponents/Header/LogoPicture';
import LogoWords from '../../../SVGConponents/Header/LogoWords';
import LogoPictureWhiteTheme from '../../../SVGConponents/Header/LogoPictureWhiteTheme';
import LogoPictureYellowTheme from '../../../SVGConponents/Header/LogoPictureYellowTheme';
import LogoPictureBlueTheme from '../../../SVGConponents/Header/LogoPictureBlueTheme';
import LogoWordsYellowTheme from '../../../SVGConponents/Header/LogoWordsYellowTheme';
import LogoWordsBlueTheme from '../../../SVGConponents/Header/LogoWordsBlueTheme';
import {useAppSelector} from '../../../../utils/Hooks/useAppSelector';
import {getThemeStyle} from '../../../../Redux/selectors/styleSelector';
import LogoWordsWhiteThemeForLogin from "../../../SVGConponents/Forms/LogoWordsWhiteThemeForLogin";


type PropsType = {
    className? : React.CSSProperties | string
    children? : PropsWithChildren<ReactNode>
}

const Popup: React.FC<PropsType> = ({children , className = ''}) => {

  const blindMode = useAppSelector(getThemeStyle)
  const themeStyle = useAppSelector(getThemeStyle)


  return (
    <div className={cn(`${s.popupWrapper} ${className}`, themeStyle ? s[themeStyle] : '')}>
      <div className={cn(s.popupHeader, 'popupHeader')}>
        {!blindMode && <LogoPicture/>}
        {themeStyle === 'yellowTheme' && <LogoPictureYellowTheme/>}
        {themeStyle === 'whiteTheme' && <LogoPictureWhiteTheme/>}
        {themeStyle === 'blueTheme' && <LogoPictureBlueTheme/>}
        {!blindMode && <LogoWords/>}
        {themeStyle === 'yellowTheme' && <LogoWordsYellowTheme/>}
        {themeStyle === 'whiteTheme' && <LogoWordsWhiteThemeForLogin/>}
        {themeStyle === 'blueTheme' && <LogoWordsBlueTheme/>}
      </div>
      <>{children}</>
    </div>
  )
}

export default Popup

