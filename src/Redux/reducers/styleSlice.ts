import {Nullable} from "../redux-store";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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
        switchBlindMode (state = initialState, action: PayloadAction<blindModeActionType>) {
            if (action.blindMode) {
                return state.themeStyle = 'yellowTheme', state.blindMode = action.payload.blindMode, state.isOptionsOpen = true
            } else {
                return state.blindMode = false, state.themeStyle = null, state.images = true, state.fontSize = 'small', state.isOptionsOpen = false
            }
        },
        setFontSizeMode (state = initialState, action: PayloadAction<fontSizeModeActionType>) {
            state.fontSize = action.payload.fontSizeMode
        },
        setThemeStyleMode (state = initialState, action: PayloadAction<themeStyleModeActionType>) {
            state.themeStyle = action.payload.themeStyleMode
        },
        setOptionsMode (state = initialState, action: PayloadAction<optionsModeActionType>) {
            state.optionsMode = action.payload.optionsMode
        },
        setImgAvailability (state = initialState, action: PayloadAction<imgAvailabilityActionType>) {
            state.imgAvailabilityMode = action.payload.imgAvailabilityMode
        },
        toggleIsLoaded (state = initialState, action: PayloadAction<isLoadedActionType>) {
            state.isLoaded = action.payload.isLoaded
        }
    }
})

export default styleSlice.reducer
export const { setFontSizeMode, setThemeStyleMode, setOptionsMode, setImgAvailability, toggleIsLoaded } = styleSlice.actions

type blindModeActionType = {
    themeStyle: any
    blindMode: boolean
}
type fontSizeModeActionType = {
    fontSizeMode: string
}
type themeStyleModeActionType = {
    themeStyleMode: string
}
type optionsModeActionType = {
    optionsMode: string
}
type imgAvailabilityActionType = {
    imgAvailabilityMode: boolean
}
type isLoadedActionType = {
    isLoaded: boolean
}