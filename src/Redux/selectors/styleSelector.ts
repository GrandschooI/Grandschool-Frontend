import {appStateType, Nullable} from '../redux-store'

export const getStyleMode = (state: appStateType): boolean => {
  return state.styleMode.blindMode
}

export const getFontSize = (state: appStateType): string => {
  return state.styleMode.fontSize
}

export const getThemeStyle = (state: appStateType): Nullable<string> => {
  return state.styleMode.themeStyle
}

export const getImgAvailability = (state: appStateType): boolean => {
  return state.styleMode.images
}

export const getLoadedInfo = (state: appStateType): boolean | undefined => {
  return state.styleMode.isLoaded
}

export const getOptionsState = (state: appStateType): boolean => {
  return state.styleMode.isOptionsOpen
}