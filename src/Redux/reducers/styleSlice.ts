import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../redux-toolkit-store'

const initialState = {
  blindMode: false,
  fontSize: 'small',
  themeStyle: null as Nullable<string>,
  images: true,
  isLoaded: true,
  isOptionsOpen: false,
}

const styleSlice = createSlice({
  name: 'style',
  initialState,
  reducers: {
    switchBlindMode: (state = initialState, action: PayloadAction<blindModeActionType>) => {
      const { blindMode } = action.payload

      state.themeStyle = blindMode ? 'yellowTheme' : null
      state.blindMode = blindMode
      state.isOptionsOpen = blindMode
      if (!blindMode) {
        state.images = true
        state.fontSize = 'small'
      }
    },
    setFontSizeMode: (state = initialState, action: PayloadAction<fontSizeModeActionType>) => {
      state.fontSize = action.payload.fontSizeMode
    },
    setThemeStyleMode: (state = initialState, action: PayloadAction<themeStyleModeActionType>) => {
      state.themeStyle = action.payload.themeStyleMode
    },
    setOptionsMode: (state = initialState, action: PayloadAction<optionsModeActionType>) => {
      state.isOptionsOpen = action.payload.optionsMode
    },
    setImgAvailability: (
      state = initialState,
      action: PayloadAction<imgAvailabilityActionType>
    ) => {
      state.images = action.payload.imgAvailabilityMode
    },
    toggleIsLoaded: (state = initialState, action: PayloadAction<isLoadedActionType>) => {
      state.isLoaded = action.payload.isLoaded
    },
  },
})

export default styleSlice.reducer
export const {
  switchBlindMode,
  setFontSizeMode,
  setThemeStyleMode,
  setOptionsMode,
  setImgAvailability,
  toggleIsLoaded,
} = styleSlice.actions

type blindModeActionType = {
  blindMode: boolean
}
type fontSizeModeActionType = {
  fontSizeMode: string
}
type themeStyleModeActionType = {
  themeStyleMode: string
}
type optionsModeActionType = {
  optionsMode: boolean
}
type imgAvailabilityActionType = {
  imgAvailabilityMode: boolean
}
type isLoadedActionType = {
  isLoaded: boolean
}
