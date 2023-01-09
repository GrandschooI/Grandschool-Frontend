import {AppStateType, Nullable} from '../redux-store'

export const getAuthStatus = (state: AppStateType): boolean => {
  return state.userData.isAuth
}

export const getUserName = (state: AppStateType): Nullable<string> => {
  return state.userData.currentUser.name
}

export const getUserSex = (state: AppStateType): Nullable<string> => {
  return state.userData.currentUser.gender
}

export const getUserBirthData = (state: AppStateType): Nullable<Date> => {
  return state.userData.currentUser.birthday
}

export const getUserCountry = (state: AppStateType): Nullable<string> => {
  return state.userData.currentUser.country
}

export const getUserCity = (state: AppStateType): Nullable<string> => {
  return state.userData.currentUser.city
}

export const getAboutUserText = (state: AppStateType): Nullable<string> => {
  return state.userData.currentUser.description
}

export const getUserPhotoLink = (state: AppStateType): Nullable<string> => {
  return state.userData.currentUser.photo
}

export const getUserAsideItems = (state: AppStateType): AsideItemsType => {
  return state.userData.asideMenuItems
}
export type AsideItemsType = Array<AsideItemType>
export type AsideItemType = {itemTitle: string, itemLink: string}
