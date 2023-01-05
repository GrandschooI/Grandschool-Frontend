import {appStateType, Nullable} from '../redux-store'

export const getAuthStatus = (state: appStateType): boolean => {
  return state.userData.isAuth
}

export const getUserName = (state: appStateType): Nullable<string> => {
  return state.userData.currentUser.name
}

export const getUserSex = (state: appStateType): Nullable<string> => {
  return state.userData.currentUser.gender
}

export const getUserBirthData = (state: appStateType): Nullable<Date> => {
  return state.userData.currentUser.birthday
}

export const getUserCountry = (state: appStateType): Nullable<string> => {
  return state.userData.currentUser.country
}

export const getUserCity = (state: appStateType): Nullable<string> => {
  return state.userData.currentUser.city
}

export const getAboutUserText = (state: appStateType): Nullable<string> => {
  return state.userData.currentUser.description
}

export const getUserPhotoLink = (state: appStateType): Nullable<string> => {
  return state.userData.currentUser.photo
}

export const getUserAsideItems = (state: appStateType): AsideItemsType => {
  return state.userData.asideMenuItems
}
export type AsideItemsType = Array<AsideItemType>
export type AsideItemType = {itemTitle: string, itemLink: string}
