import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {Dispatch} from "redux"
import {AuthAPI} from "../../api/authAPI"
import {toast} from "react-toastify"
import {AxiosError} from "axios"
import {removeDataFromLocalStorage, setDataToLocalStorage} from "../../utils/scaffolding"
import {userAPI} from "../../api/userAPI"
import {toggleIsLoaded} from "./styleSlice"
import {Nullable} from "../redux-toolkit-store"

export const FACEBOOK_CLIENT_ID = '1166464030893684'
export const GOOGLE_CLIENT_ID = '959593221954-sl41n7108b6se8uqtm4c64q81g1v49ap.apps.googleusercontent.com'

const initialState = {
  currentUser: {
    birthday: null as Nullable<Date>,
    city: null as Nullable<string>,
    country: null as Nullable<string>,
    created_at: null as Nullable<string>,
    description: null as Nullable<string>,
    email: null as Nullable<string>,
    email_verified: false,
    gender: null as Nullable<string>,
    id: null as Nullable<number>,
    name: null as Nullable<string>,
    phone: null as Nullable<string>,
    photo: null as Nullable<string>,
    roles: [],
    updated_at: null as Nullable<string>
  },
  asideMenuItems: [
    {itemTitle: 'Personal information', itemLink: '/profile/personal-info'},
    {itemTitle: 'Personal achievements', itemLink: '/profile/personal-achievements'},
    {itemTitle: 'Account Settings', itemLink: '/profile/account-settings'}
  ],
  isAuth: false
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setAuth(state = initialState, action: PayloadAction<setAuthActionType>) {
      state.currentUser = action.payload.authData
      state.isAuth = action.payload.isAuth
    },
    setProfileInfo(state = initialState, action: PayloadAction<setProfileActionType>) {
      state.currentUser.name = action.payload.name
      state.currentUser.gender = action.payload.gender
      state.currentUser.birthday = action.payload.birthday
      state.currentUser.country = action.payload.country
      state.currentUser.city = action.payload.city
      state.currentUser.description = action.payload.description
    },
    setPhoto(state = initialState, action: PayloadAction<setPhotoActionType>) {
      state.currentUser.photo = action.payload
    }
  }
})

export const registerThunkCreator = (email: string, password: string, confirmPassword: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(toggleIsLoaded({isLoaded: false}))
    const response = await AuthAPI.register(email, password, confirmPassword)
    const userData = response.data
    if (userData) {
      setUserToStateAndStorage(dispatch, userData.user, true, "token", userData.access_token)
      accessHandler(userData)
    } else {
      toast.error("Coś poszło nie tak", {autoClose: 5000})
    }
  } catch (error: any) {
    const errorMessage = error?.response?.data.message
    toast.error(errorMessage)
  } finally {
    dispatch(toggleIsLoaded({isLoaded: true}))
  }
}

export const loginThunkCreator = (email?: string, password?: string, driver?: string, access_token?: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(toggleIsLoaded({isLoaded: false}))
      const response = await AuthAPI.login(email, password, driver, access_token)
      const userData = response.data
      if (userData) {
        accessHandler(response)
        setUserToStateAndStorage(dispatch, userData.user, true, 'token', userData.access_token)
      }
      dispatch(toggleIsLoaded({isLoaded: true}))
    } catch (error: any) {
      const errorMessage = error?.response?.data.message
      toast.error(errorMessage)
      dispatch(toggleIsLoaded({isLoaded: true}))
    }
  }
}

export const logoutThunkCreator = () => async (dispatch: Dispatch) => {
  try {
    dispatch(toggleIsLoaded({isLoaded: false}))
    const token = localStorage.token
    const response = await AuthAPI.logout(token)
    if (response.status === 204) {
      dispatch(setAuth({authData: {}, isAuth: false}))
      removeDataFromLocalStorage('token')
      removeDataFromLocalStorage('user')
    } else {
      toast.error('Coś poszło nie tak', {autoClose: 5000})
    }
  } catch (error) {
    toast.error((error as AxiosError).response?.data.message)
  } finally {
    dispatch(toggleIsLoaded({isLoaded: true}))
  }
}

export const forgotPasswordThunkCreator = (email: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(toggleIsLoaded({isLoaded: false}))
    await AuthAPI.forgotPassword(email)
  } catch (error) {
    toast.error((error as AxiosError).response?.data.message)
  } finally {
    dispatch(toggleIsLoaded({isLoaded: true}))
  }
}

export const setUserPhotoThunkCreator = (userId: number, token: string, file: any) => async (dispatch: Dispatch) => {
  try {
    dispatch(toggleIsLoaded({isLoaded: false}))
    const response = await userAPI.setProfilePhoto(userId, token, file)
    dispatch(setPhoto(response.data.data.photo))
    setDataToLocalStorage('user', JSON.stringify(response.data.data))
  } catch (error) {
    toast.error((error as AxiosError).response?.data.message)
  } finally {
    dispatch(toggleIsLoaded({isLoaded: true}))
  }
}

export const setProfileInfoFormThunkCreator = (userId: Nullable<number>, token: string, userFormData: setProfileActionType) => async (dispatch: Dispatch) => {
  try {
    dispatch(toggleIsLoaded({isLoaded: false}))
    const response = await userAPI.setProfileIfoForm(userId, token, userFormData)
    dispatch(setProfileInfo(response.data.data))
  } catch (error) {
    toast.error((error as AxiosError).response?.data.message)
  } finally {
    dispatch(toggleIsLoaded({isLoaded: true}))
  }
}

// Scaffolding functions

export const setUserToStateAndStorage = (
  dispatch: Dispatch,
  authData: any,
  isAuth: boolean,
  accessTokenName?: string | undefined,
  accessTokenData?: string | undefined
) => {
  dispatch(setAuth({authData, isAuth}))
  setDataToLocalStorage("user", JSON.stringify(authData))
  if (accessTokenName && accessTokenData) {
    setDataToLocalStorage(accessTokenName, accessTokenData)
  }
}

export const setUserFromLocalStorage = () => (dispatch: Dispatch) => {
  const userFromLocalstorage = window.localStorage.getItem("user")
  if (userFromLocalstorage) {
    dispatch(setAuth({authData: JSON.parse(userFromLocalstorage), isAuth: true}))
  }
}

const accessHandler = (response: any) => {
  if (response) {
    toast("Jesteś zalogowany", {autoClose: 5000})
  }
}

export const errorHandler = (error: any) => {
  if (error?.length) {
    error.forEach((el: any) => {
      toast.error(el.message, {autoClose: 5000})
    })
  }
}

export default userSlice.reducer
export const {setAuth, setProfileInfo, setPhoto} = userSlice.actions

export type setProfileActionType = {
  name: Nullable<string>
  gender: string
  birthday: Date
  country: Nullable<string>
  city: Nullable<string>
  description: string
}
type setAuthActionType = {
  authData: any
  isAuth: boolean
}
type setPhotoActionType = Nullable<string>