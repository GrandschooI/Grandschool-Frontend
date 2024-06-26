import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { FormikValues } from 'formik/dist/types'
import { toast } from 'react-toastify'
import { Dispatch } from 'redux'

import { AuthAPI, AuthDataType, AuthResponseType, UserDataResponseType } from '../../api/authAPI'
import { userAPI } from '../../api/userAPI'
import { removeDataFromLocalStorage, setDataToLocalStorage } from '../../utils/scaffolding'
import { Nullable } from '../redux-toolkit-store'

import { toggleIsLoaded } from './styleSlice'

export const FACEBOOK_CLIENT_ID = process.env.REACT_APP_FACEBOOK_CLIENT_ID || ''
export const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || ''

// type ProfileType = {
//   birthday: null | string | Date
//   city: null | string
//   country: null | string
//   created_at: Date | string
//   description: null | string
//   email: null | string
//   verified: boolean
//   gender: null | string
//   id: null | string
//   name: null | string
//   phone: null | string
//   photo: null | string
//   roles: null | string[] | string
//   updated_at: Date | string
// }

type setAuthActionType = {
  authData: any
  isAuth: boolean
}
const initialState = {
  currentUser: {
    birthday: null as Date | null,
    city: null as Nullable<string>,
    country: null as Nullable<string>,
    created_at: null as Nullable<string>,
    description: null as Nullable<string>,
    email: null as Nullable<string>,
    verified: false,
    gender: null as Nullable<string>,
    id: null as Nullable<number>,
    name: null as Nullable<string>,
    phone: null as Nullable<string>,
    photo: null as Nullable<string>,
    roles: [],
    updated_at: null as Nullable<string>,
  },
  asideMenuItems: [
    { itemTitle: 'Personal information', itemLink: '/profile/personal-info' },
    { itemTitle: 'Personal achievements', itemLink: '/profile/personal-achievements' },
    { itemTitle: 'Account Settings', itemLink: '/profile/account-settings' },
  ],
  isAuth: false,
  isRegistered: false,
  isAuth2GoogleOrFacebook: false,
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
    },
    setIsRegistered(state, action: PayloadAction<{ isRegistered: boolean }>) {
      state.isRegistered = action.payload.isRegistered
    },
    setIsAuth2GoogleOrFacebook(state, action: PayloadAction<{ isAuth2GoogleOrFacebook: boolean }>) {
      state.isAuth2GoogleOrFacebook = action.payload.isAuth2GoogleOrFacebook
    },
  },
})

export const registerThunkCreator =
  (email: string, password: string, confirmPassword: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(toggleIsLoaded({ isLoaded: false }))
      const response = await AuthAPI.register(email, password, confirmPassword)
      const userData = response.data

      dispatch(setIsRegistered({ isRegistered: true }))
      if (userData) {
        setUserToStateAndStorage(dispatch, userData.user, true, 'token', userData.access_token)
      } else {
        toast.error('Coś poszło nie tak', { autoClose: 5000 })
        dispatch(setIsRegistered({ isRegistered: false }))
      }
    } catch (error) {
      const err = error as AxiosError
      const errorMessage = err?.response?.data.message

      dispatch(setIsRegistered({ isRegistered: false }))
      toast.error(errorMessage)
    } finally {
      dispatch(toggleIsLoaded({ isLoaded: true }))
    }
  }

export const loginThunkCreator = (
  email?: string,
  password?: string,
  driver?: string,
  access_token?: string
) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(toggleIsLoaded({ isLoaded: false }))
      const response = await AuthAPI.login(email, password, driver, access_token)
      const userData = response.data

      if (userData) {
        accessHandler(response)
        setUserToStateAndStorage(dispatch, userData.user, true, 'token', userData.access_token)
        if (driver) {
          dispatch(setIsAuth2GoogleOrFacebook({ isAuth2GoogleOrFacebook: true }))
        }
      }
    } catch (error) {
      const err = error as AxiosError

      toast.error(err?.response?.data.message)
    } finally {
      dispatch(toggleIsLoaded({ isLoaded: true }))
      dispatch(setIsAuth2GoogleOrFacebook({ isAuth2GoogleOrFacebook: false }))
    }
  }
}

export const logoutThunkCreator = () => async (dispatch: Dispatch) => {
  try {
    dispatch(toggleIsLoaded({ isLoaded: false }))
    const token = localStorage.token
    const response = await AuthAPI.logout(token)

    if (response.status === 204) {
      dispatch(setAuth({ authData: {}, isAuth: false }))
      removeDataFromLocalStorage('token')
      removeDataFromLocalStorage('user')
      removeDataFromLocalStorage('sendMessage')

      dispatch(setIsRegistered({ isRegistered: false }))
    } else {
      toast.error('Coś poszło nie tak', { autoClose: 5000 })
    }
  } catch (error) {
    toast.error((error as AxiosError).response?.data.message)
  } finally {
    dispatch(toggleIsLoaded({ isLoaded: true }))
  }
}

export const forgotPassword = createAsyncThunk(
  'auth/forgot-password',
  async (email: string, { dispatch }) => {
    dispatch(toggleIsLoaded({ isLoaded: false }))
    try {
      const response = await AuthAPI.forgotPassword(email)

      return response.message
    } catch (error) {
      return (error as AxiosError).response?.data.message
    } finally {
      dispatch(toggleIsLoaded({ isLoaded: true }))
    }
  }
)

export const setUserPhotoThunkCreator =
  (userId: number, token: string, file: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(toggleIsLoaded({ isLoaded: false }))
      const response = await userAPI.setProfilePhoto(userId, token, file)

      dispatch(setPhoto(response.data.data.photo))
      setDataToLocalStorage('user', JSON.stringify(response.data.data))
    } catch (error) {
      toast.error((error as AxiosError).response?.data.message)
    } finally {
      dispatch(toggleIsLoaded({ isLoaded: true }))
    }
  }

export const setProfileInfoFormThunkCreator =
  (userId: Nullable<number>, token: string, userFormData: FormikValues) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(toggleIsLoaded({ isLoaded: false }))
      const userFromLocalstorage = window.localStorage.getItem('user')

      const response = await userAPI.setProfileIfoForm(userId, token, userFormData)

      if (userFromLocalstorage) {
        const profileData = response?.data?.data
        const parseUser = JSON.parse(userFromLocalstorage)

        const newData = {
          ...parseUser,
          ...profileData,
        }

        dispatch(setProfileInfo(response.data.data))
        setDataToLocalStorage('user', JSON.stringify(newData))
      }
    } catch (error) {
      toast.error((error as AxiosError).response?.data.message)
    } finally {
      dispatch(toggleIsLoaded({ isLoaded: true }))
    }
  }

// Scaffolding functions

export const setUserToStateAndStorage = (
  dispatch: Dispatch,
  authData: UserDataResponseType,
  isAuth: boolean,
  accessTokenName?: string | undefined,
  accessTokenData?: string | undefined
) => {
  dispatch(setAuth({ authData, isAuth }))
  setDataToLocalStorage('user', JSON.stringify(authData))
  if (accessTokenName && accessTokenData) {
    setDataToLocalStorage(accessTokenName, accessTokenData)
  }
}

export const setUserFromLocalStorage = () => (dispatch: Dispatch) => {
  const userFromLocalstorage = window.localStorage.getItem('user')

  if (userFromLocalstorage) {
    dispatch(setAuth({ authData: JSON.parse(userFromLocalstorage), isAuth: true }))
    dispatch(setIsRegistered({ isRegistered: true }))
  }
}

const accessHandler = (response: AuthResponseType | AuthDataType) => {
  if (response) {
    toast('Jesteś zalogowany', { autoClose: 5000 })
  }
}

export const errorHandler = (error: string | []) => {
  if (error?.length) {
    if (typeof error !== 'string') {
      error.forEach((el: { message: string }) => {
        toast.error(el.message, { autoClose: 5000 })
      })
    }
  }
}

export default userSlice.reducer
export const { setAuth, setProfileInfo, setPhoto, setIsRegistered, setIsAuth2GoogleOrFacebook } =
  userSlice.actions

export type setProfileActionType = {
  name: null | string
  gender: null | string
  birthday: null | Date
  country: null | string
  city: null | string
  description: null | string
}

type setPhotoActionType = Nullable<string>

export const sendPhoneVerify = createAsyncThunk(
  'verify/phone',
  async (payload: string, { dispatch }) => {
    dispatch(toggleIsLoaded({ isLoaded: false }))

    try {
      await userAPI.sendPhoneVerify({ phone: payload })

      setDataToLocalStorage('sendMessage', JSON.stringify(true))
    } catch (error) {
      toast.error((error as AxiosError).response?.data?.message)
      setDataToLocalStorage('sendMessage', JSON.stringify(false))
    } finally {
      dispatch(toggleIsLoaded({ isLoaded: true }))
    }
  }
)

export const confirmPhoneVerify = createAsyncThunk(
  'verify/confirm-phone',
  async (payload: { phone: string; code: number }, { dispatch }) => {
    dispatch(toggleIsLoaded({ isLoaded: false }))

    try {
      await userAPI.confirmPhoneUser(payload)
      setDataToLocalStorage('isMessageSend', JSON.stringify(true))

      return 'success'
    } catch (err) {
      setDataToLocalStorage('isMessageSend', JSON.stringify(false))

      return (err as AxiosError).response?.data?.message
    } finally {
      dispatch(toggleIsLoaded({ isLoaded: true }))
    }
  }
)
export const sendEmailVerify = createAsyncThunk(
  'send-verify/email',
  async (payload: string, { dispatch }) => {
    dispatch(toggleIsLoaded({ isLoaded: false }))
    try {
      await userAPI.sendVerifyMail({ email: payload })
      setDataToLocalStorage('sendMessage', JSON.stringify(true))
    } catch (err) {
      if (err instanceof ReferenceError) {
        toast(err.message)
      }
      setDataToLocalStorage('sendMessage', JSON.stringify(false))
    } finally {
      dispatch(toggleIsLoaded({ isLoaded: true }))
    }
  }
)

export const verifyEmail = createAsyncThunk(
  'auth/email-verify',
  async (payload: { url: string }, { dispatch }) => {
    dispatch(toggleIsLoaded({ isLoaded: false }))
    try {
      const response = await userAPI.verifyEmail(payload.url)
      const userFromLocalstorage = window.localStorage.getItem('user')

      if (userFromLocalstorage) {
        const parseUser = JSON.parse(userFromLocalstorage)

        const newData = { ...parseUser, verified: true }

        setDataToLocalStorage('user', JSON.stringify(newData))
      }

      toast.success(`${response?.data?.message} Verify Email`)
    } catch (err) {
      toast.error((err as AxiosError).response?.data?.message)
    } finally {
      dispatch(toggleIsLoaded({ isLoaded: true }))
    }
  }
)

export const sendNewPassword = createAsyncThunk(
  'auth/send-new-password',
  async (payload: { token: string; newPassword: string }, { dispatch }) => {
    dispatch(toggleIsLoaded({ isLoaded: false }))
    try {
      console.log(payload)
      const response = await userAPI.resetPassword(payload.token, payload.newPassword)

      if (response) toast.success('Password successfully recovered')

      return response.data.message
    } catch (err) {
      toast.error((err as AxiosError).response?.data?.message)
    } finally {
      dispatch(toggleIsLoaded({ isLoaded: true }))
    }
  }
)
