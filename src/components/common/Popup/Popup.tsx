import React from 'react'
import s from './Popup.module.scss'
import '../../../style.scss'
import cn from "classnames";
import LogoPicture from "../../SVGConponents/Header/LogoPicture";
import LogoWords from "../../SVGConponents/Header/LogoWords";
import LogoWordsWhiteTheme from "../../SVGConponents/Header/LogoWordsWhiteTheme";
import LogoPictureWhiteTheme from "../../SVGConponents/Header/LogoPictureWhiteTheme";
import LogoPictureYellowTheme from "../../SVGConponents/Header/LogoPictureYellowTheme";
import LogoPictureBlueTheme from "../../SVGConponents/Header/LogoPictureBlueTheme";
import {Nullable} from "../../../Redux/redux-store";
import LogoWordsYellowTheme from "../../SVGConponents/Header/LogoWordsYellowTheme";
import LogoWordsBlueTheme from "../../SVGConponents/Header/LogoWordsBlueTheme";


const Popup: React.FC<propsType> = ( { blindMode, themeStyle, children }) => {

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

type propsType = {
    blindMode: boolean
    themeStyle: Nullable<string>
    images: boolean
    fontSize: Nullable<string>
    children: any
}