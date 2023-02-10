import {Nullable} from "../redux-store";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    blindMode: false,
    fontSize: 'small', //also has medium and large
    themeStyle: null as Nullable<string>, // has yellowTheme, whiteTheme and blueTheme
    images: true,
    isLoaded: true,
    isOptionsOpen: false
}

const styleSlice = createSlice({
    name: 'style',
    initialState: initialState,
    reducers: {
        switchBlindMode: (state, blindMode: boolean) => ({type: 'SWITCH_BLIND_MODE', blindMode} as const),
        setFontSizeMode: (fontSizeMode: string) => ({type: 'SET_FONTSIZE_MODE', fontSizeMode} as const),
        setThemeStyleMode: (themeStyleMode: string) => ({type: 'SET_THEMESTYLE_MODE', themeStyleMode} as const),
        setOptionsMode: (optionsMode: boolean) => ({type: 'SET_OPTIONS_MODE', optionsMode} as const),
        setImgAvailability: (imgAvailabilityMode: boolean) => ({
            type: 'SET_IMGAVAILABILITY_MODE',
            imgAvailabilityMode
        } as const),
        toggleIsLoaded: (isLoaded: boolean) => ({type: 'TOGGLE_IS-LOADED', isLoaded} as const)
    }
})