import {Nullable} from "../redux-toolkit-store";

const initialState = {
  blindMode: false,
  fontSize: 'small', //also has medium and large
  themeStyle: null as Nullable<string>, // has yellowTheme, whiteTheme and blueTheme
  images: true,
  isOptionsOpen: false,
  isLoaded: true

}

const styleReducer = (state = initialState, action: styleActionType) => {
  switch (action.type) {
    case 'SWITCH_BLIND_MODE':
      // todo refactring
      if (action.blindMode) {
        return {
          ...state,
          themeStyle: 'yellowTheme',
          blindMode: action.blindMode,
          isOptionsOpen: true
        }
      }
      return {
        ...state,
        blindMode: false,
        themeStyle: null,
        images: true,
        fontSize: 'small',
        isOptionsOpen: false
      }
    case 'SET_FONTSIZE_MODE':
      return {
        ...state,
        fontSize: action.fontSizeMode
      }
    case 'SET_THEMESTYLE_MODE':
      return {
        ...state,
        themeStyle: action.themeStyleMode
      }
    case 'SET_IMGAVAILABILITY_MODE':
      return {
        ...state,
        images: action.imgAvailabilityMode
      }
    case 'SET_OPTIONS_MODE':
      return {
        ...state,
        isOptionsOpen: action.optionsMode
      }
    case 'TOGGLE_IS-LOADED':
      return {...state, isLoaded: action.isLoaded}
    default:
      return state
  }
}

// Actions

export const styleActions = {
  switchBlindModeAC: (blindMode: boolean) => ({type: 'SWITCH_BLIND_MODE', blindMode} as const),
  setFontSizeModeAC: (fontSizeMode: string) => ({type: 'SET_FONTSIZE_MODE', fontSizeMode} as const),
  setThemeStyleModeAC: (themeStyleMode: string) => ({type: 'SET_THEMESTYLE_MODE', themeStyleMode} as const),
  setOptionsModeAC: (optionsMode: boolean) => ({type: 'SET_OPTIONS_MODE', optionsMode} as const),
  setImgAvailabilityAC: (imgAvailabilityMode: boolean) => ({
    type: 'SET_IMGAVAILABILITY_MODE',
    imgAvailabilityMode
  } as const),
  toggleIsLoadedAC: (isLoaded: boolean) => ({type: 'TOGGLE_IS-LOADED', isLoaded} as const)
}


export default styleReducer


// Types
export type styleInitialStateType = typeof initialState
type styleActionType = InferActionType<typeof styleActions>

