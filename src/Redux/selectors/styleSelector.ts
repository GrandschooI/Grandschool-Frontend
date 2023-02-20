import {AppStateType, Nullable} from "../redux-toolkit-store";


export const getStyleMode = (state: AppStateType): boolean => {
  return state.styleMode.blindMode
}

export const getFontSize = (state: AppStateType): string => {
  return state.styleMode.fontSize
}

export const getThemeStyle = (state: AppStateType): Nullable<string> => {
  return state.styleMode.themeStyle
}

export const getImgAvailability = (state: AppStateType): boolean => {
  return state.styleMode.images
}

export const getLoadedInfo = (state: AppStateType): boolean | undefined => {
  return state.styleMode.isLoaded
}

export const getOptionsState = (state: AppStateType): boolean => {
  return state.styleMode.isOptionsOpen
}