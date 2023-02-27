import {AppStateType, Nullable} from "../redux-toolkit-store";

export const getStyleMode = (state: AppStateType): boolean => state.styleMode.blindMode
export const getFontSize = (state: AppStateType): string => state.styleMode.fontSize
export const getThemeStyle = (state: AppStateType): Nullable<string> => state.styleMode.themeStyle
export const getImgAvailability = (state: AppStateType): boolean => state.styleMode.images
export const getLoadedInfo = (state: AppStateType): boolean | undefined => state.styleMode.isLoaded
export const getOptionsState = (state: AppStateType): boolean => state.styleMode.isOptionsOpen