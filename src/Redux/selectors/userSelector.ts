import { AppStateType, Nullable } from '../redux-toolkit-store'

export const getAuthStatus = (state: AppStateType): boolean => state.userData.isAuth
export const getUserName = (state: AppStateType): Nullable<string> =>
  state.userData.currentUser.name
export const getUserSex = (state: AppStateType): Nullable<string> =>
  state.userData.currentUser.gender
export const getUserId = (state: AppStateType): Nullable<number> => state.userData.currentUser.id
export const getUserDescription = (state: AppStateType): Nullable<string> =>
  state.userData.currentUser.description
export const getUserBirthData = (state: AppStateType): Nullable<Date> =>
  state.userData.currentUser.birthday
export const getUserCountry = (state: AppStateType): Nullable<string> =>
  state.userData.currentUser.country
export const getUserPhone = (state: AppStateType): Nullable<string> =>
  state.userData.currentUser.phone
export const getUserEmail = (state: AppStateType): Nullable<string> =>
  state.userData.currentUser.email
export const getUserCity = (state: AppStateType): Nullable<string> =>
  state.userData.currentUser.city
export const getAboutUserText = (state: AppStateType): Nullable<string> =>
  state.userData.currentUser.description
export const getUserPhotoLink = (state: AppStateType): Nullable<string> =>
  state.userData.currentUser.photo
export const getUserAsideItems = (state: AppStateType): AsideItemsType =>
  state.userData.asideMenuItems
export const getIsRegistered = (state: AppStateType) => state.userData.isRegistered
export const getIsVerify = (state: AppStateType) => state.userData.currentUser.verified
export const getIsAuthGoogleOrFacebook = (state: AppStateType) =>
  state.userData.isAuth2GoogleOrFacebook
export type AsideItemsType = Array<AsideItemType>
export type AsideItemType = { itemTitle: string; itemLink: string }
