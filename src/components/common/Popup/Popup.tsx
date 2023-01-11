import React, {PropsWithChildren, ReactNode} from 'react'
import s from './Popup.module.scss'
import '../../../style.scss'
import cn from 'classnames';
import LogoPicture from '../../SVGConponents/Header/LogoPicture';
import LogoWords from '../../SVGConponents/Header/LogoWords';
import LogoWordsWhiteTheme from '../../SVGConponents/Header/LogoWordsWhiteTheme';
import LogoPictureWhiteTheme from '../../SVGConponents/Header/LogoPictureWhiteTheme';
import LogoPictureYellowTheme from '../../SVGConponents/Header/LogoPictureYellowTheme';
import LogoPictureBlueTheme from '../../SVGConponents/Header/LogoPictureBlueTheme';
import LogoWordsYellowTheme from '../../SVGConponents/Header/LogoWordsYellowTheme';
import LogoWordsBlueTheme from '../../SVGConponents/Header/LogoWordsBlueTheme';
import {useAppSelector} from '../../../utils/Hooks/useAppSelector';
import {getThemeStyle} from '../../../Redux/selectors/styleSelector';


const Popup: React.FC<PropsWithChildren<ReactNode>> = ({children}) => {

  const blindMode = useAppSelector(getThemeStyle)
  const themeStyle = useAppSelector(getThemeStyle)


  return (
    <div className={cn(s.popupWrapper, themeStyle ? s[themeStyle] : '')}>
      <div className={cn(s.popupHeader, 'popupHeader')}>
        {!blindMode && <LogoPicture/>}
        {themeStyle === 'yellowTheme' && <LogoPictureYellowTheme/>}
        {themeStyle === 'whiteTheme' && <LogoPictureWhiteTheme/>}
        {themeStyle === 'blueTheme' && <LogoPictureBlueTheme/>}
        {!blindMode && <LogoWords/>}
        {themeStyle === 'yellowTheme' && <LogoWordsYellowTheme/>}
        {themeStyle === 'whiteTheme' && <LogoWordsWhiteTheme/>}
        {themeStyle === 'blueTheme' && <LogoWordsBlueTheme/>}
      </div>
      <div>{children}</div>
    </div>
  )
}

export default Popup

