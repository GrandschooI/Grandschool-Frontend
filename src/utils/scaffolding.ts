import { Nullable } from '../Redux/redux-toolkit-store'

type LocalStorageKey = string

const setDataToLocalStorage = (key: LocalStorageKey, value: string): void => {
  localStorage.setItem(key, value)
}

const removeDataFromLocalStorage = (key: LocalStorageKey): void => {
  localStorage.removeItem(key)
}

export const activeThemeStyle = (themeStyle: Nullable<string>) => (themeStyle ? themeStyle : '')

export const activeFontSize = (fontSize: Nullable<string>) => (fontSize ? fontSize : '')

export { setDataToLocalStorage, removeDataFromLocalStorage }
