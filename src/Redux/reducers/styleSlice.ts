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
        /*switchBlindMode (state: any, action: any) {
            action.blindMode ?
                {state.themeStyle = 'yellowTheme', state.blindMode = action.blindMode, state.isOptionsOpen = true} :
                {state.blindMode = false, state.themeStyle = null, state.images = true, state.fontSize = 'small', state.isOptionsOpen = false}
        },*/
        setFontSizeMode (state: any, action: any) {
            state.fontSize = action.fontSizeMode
        },
        setThemeStyleMode (state: any, action: any) {
            state.themeStyle = action.themeStyleMode
        },
        setOptionsMode (state: any, action: any) {
            state.optionsMode = action.optionsMode
        },
        setImgAvailability (state: any, action: any) {
            state.imgAvailabilityMode = action.imgAvailabilityMode
        },
        toggleIsLoaded (state: any, action: any) {
            state.isLoaded = action.isLoaded
        }
    }
})

export default styleSlice.reducer
export const { setFontSizeMode, setThemeStyleMode, setOptionsMode, setImgAvailability, toggleIsLoaded } = styleSlice.actions;
