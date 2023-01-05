import React, {useEffect} from 'react'
import {CSSTransition} from 'react-transition-group'
import cn from 'classnames'
import {Nullable} from '../../../Redux/redux-store'
import s from './BlindModeOptions.module.scss'

const BlindModeOptions: React.FC<propsType> = ({
                                                   blindMode,
                                                   fontSize,
                                                   themeStyle,
                                                   images,
                                                   isOptionsOpen,
                                                   setFontSizeModeAC,
                                                   setThemeStyleModeAC,
                                                   setImgAvailabilityAC,
                                                   fontSizeFromLocalStorage,
                                                   themeStyleFromLocalStorage,
                                                   imagesFromLocalStorage
                                               }) => {
    useEffect(() => {
        if (blindMode) {
            if (fontSizeFromLocalStorage) {
                if (fontSize !== fontSizeFromLocalStorage) {
                    setFontSizeModeAC(fontSizeFromLocalStorage)
                }
            }
            if (themeStyleFromLocalStorage) {
                if (themeStyle !== themeStyleFromLocalStorage) {
                    setThemeStyleModeAC(themeStyleFromLocalStorage)
                }
            }
            if (imagesFromLocalStorage === 'false') {
                images && setImgAvailabilityAC(false)
            }
        }
    })

    const isFontSizeActive = (fontSizeMode: string) => fontSize === fontSizeMode ? s.active : ''
    const isThemeStyleActive = (themeStyleMode: string) => themeStyle === themeStyleMode ? s.active : ''

    return (
        <CSSTransition
            in={blindMode && isOptionsOpen}
            timeout={300}
            classNames={{
                enter: s.optionEnter,
                enterActive: s.optionEnterActive,
                exitActive: s.optionExitActive
            }}
            unmountOnExit
        >
            <section className={cn(s.optionsBlock, s.active, s[(themeStyle ? themeStyle : '')], s[fontSize])}>
                <div className={cn(s.optionsWrap, 'container')}>
                    <div>
                        <span className={cn(s.optionLabel, s.first)}>Rozmiar czcionki:</span>
                        <button className={cn(s.button, s.small, isFontSizeActive('small'))}
                                onClick={() => {
                                    setFontSizeModeAC('small')
                                    window.localStorage.setItem('fontSizeFromLocalStorage', 'small')
                                }}>A
                        </button>
                        <button className={cn(s.button, s.medium, isFontSizeActive('medium'))}
                                onClick={() => {
                                    setFontSizeModeAC('medium')
                                    window.localStorage.setItem('fontSizeFromLocalStorage', 'medium')
                                }}>A
                        </button>
                        <button className={cn(s.button, s.large, isFontSizeActive('large'))}
                                onClick={() => {
                                    setFontSizeModeAC('large')
                                    window.localStorage.setItem('fontSizeFromLocalStorage', 'large')
                                }}>A
                        </button>
                    </div>

                    <div>
                        <span className={s.optionLabel}>Kolor:</span>
                        <button className={cn(s.button, s.yellow, isThemeStyleActive('yellowTheme'))}
                                onClick={() => {
                                    setThemeStyleModeAC('yellowTheme')
                                    window.localStorage.setItem('themeStyleFromLocalStorage', 'yellowTheme')
                                }}>K
                        </button>
                        <button className={cn(s.button, s.white, isThemeStyleActive('whiteTheme'))}
                                onClick={() => {
                                    setThemeStyleModeAC('whiteTheme')
                                    window.localStorage.setItem('themeStyleFromLocalStorage', 'whiteTheme')
                                }}>K
                        </button>
                        <button className={cn(s.button, s.blue, isThemeStyleActive('blueTheme'))}
                                onClick={() => {
                                    setThemeStyleModeAC('blueTheme')
                                    window.localStorage.setItem('themeStyleFromLocalStorage', 'blueTheme')
                                }}>K
                        </button>
                    </div>

                    <div>
                        <span className={s.optionLabel}>Obrazy:</span>
                        <button className={cn(s.button, s.images, s.active, s.imagesSwitcher)}
                                onClick={() => {
                                    if (images) {
                                        setImgAvailabilityAC(!images)
                                        window.localStorage.setItem('imagesFromLocalStorage', 'false')
                                    } else {
                                        setImgAvailabilityAC(!images)
                                        window.localStorage.setItem('imagesFromLocalStorage', 'true')
                                    }
                                }}>
                            {images ? 'Wyłącz' : 'Włącz'}
                        </button>
                    </div>
                </div>
            </section>
        </CSSTransition>
    )
}

export default BlindModeOptions


type propsType = {
    blindMode: boolean
    fontSize: string
    themeStyle: Nullable<string>
    images: boolean
    isOptionsOpen: boolean
    setFontSizeModeAC: (fontSizeFromLocalStorage: string) => void
    setThemeStyleModeAC: (themeStyleFromLocalStorage: string) => void
    setImgAvailabilityAC: (param: boolean) => void
    setOptionsModeAC: (isOptionsOpen: boolean) => void
    fontSizeFromLocalStorage: Nullable<string>
    themeStyleFromLocalStorage: Nullable<string>
    imagesFromLocalStorage: Nullable<string>
}