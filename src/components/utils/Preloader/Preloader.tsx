import React from 'react'
import s from './Preloader.module.scss'
import {useAppSelector} from "../../../utils/Hooks/useAppSelector";
import {getThemeStyle} from "../../../Redux/selectors/styleSelector";
import cn from "classnames";


const Preloader = () => {

    const themeStyle = useAppSelector(getThemeStyle)

  return (
      <div className={cn(s.preloaderOverlay, s[themeStyle ? themeStyle : ''])}>
          <svg className={cn(s.preloader, s[themeStyle ? themeStyle : ''])} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <circle transform="translate(8 0)" cx="0" cy="16" r="0">
                  <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0"
                           keyTimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8"
                           calcMode="spline"/>
              </circle>
              <circle transform="translate(16 0)" cx="0" cy="16" r="0">
                  <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.3"
                           keyTimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8"
                           calcMode="spline"/>
              </circle>
              <circle transform="translate(24 0)" cx="0" cy="16" r="0">
                  <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.6"
                           keyTimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8"
                           calcMode="spline"/>
              </circle>
          </svg>
      </div>
  )
}

export default Preloader