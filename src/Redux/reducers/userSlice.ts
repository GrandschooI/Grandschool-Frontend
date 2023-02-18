import {Nullable} from "../redux-store";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Dispatch} from "redux";
import {styleActions} from "./styleReducer";
import {AuthAPI, AuthResponseType} from "../../api/authAPI";
import {toast} from "react-toastify";
import {AxiosError} from "axios";
import {removeDataFromLocalStorage, setDataToLocalStorage} from "../../utils/scaffolding";
import {userAPI} from "../../api/userAPI";
import userReducer, {userActions} from "./userReducer";

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
        setAuth (state = initialState, action: any) {
            state.currentUser = action.authData
            state.isAuth = action.isAuth
        },
        setProfileInfo (state = initialState, action: any) {
           state.currentUser.name = action.data.name
           state.currentUser.gender = action.data.gender
           state.currentUser.birthday = action.data.birthDate
           state.currentUser.country = action.data.country
           state.currentUser.city = action.data.city
           state.currentUser.description = action.data.aboutUserText
        },
        setPhoto (state = initialState, action: any) {
            state.currentUser.photo = action.data
        }
    }
})


export const registerThunkCreator = (email: string, password: string, confirmPassword: string) => {
    return (dispatch: Dispatch) => {
        dispatch(styleActions.toggleIsLoadedAC(false))
        AuthAPI.register(email, password, confirmPassword)
            .then((response: AuthResponseType) => {
                const userData = response.data
                if (userData) {
                    setUserToStateAndStorage(dispatch, userData.user,
                        true, 'token', userData.access_token)
                    accessHandler(userData)
                } else {
                    toast.error('Coś poszło nie tak', {autoClose: 5000})
                }
            })
            .catch((error: AxiosError) => {
                const errorMessage = error?.response?.data.message
                toast.error(errorMessage)
            }).finally(() => {
            dispatch(styleActions.toggleIsLoadedAC(true))
        })
    }
}

export const loginThunkCreator = (email?: string, password?: string, driver?: string, access_token?: string) => {
    return (dispatch: Dispatch) => {
        dispatch(styleActions.toggleIsLoadedAC(false))
        AuthAPI.login(email, password, driver, access_token)
            .then((response: AuthResponseType) => {
                const userData = response.data
                if (userData) {
                    accessHandler(response)
                    setUserToStateAndStorage(dispatch, userData.user,
                        true, 'token', userData.access_token)
                }
            })
            .catch((error: AxiosError) => {
                const errorMessage = error?.response?.data.message
                toast.error(errorMessage)
            }).finally(() => {
            dispatch(styleActions.toggleIsLoadedAC(true))
        })
    }
}

export const logoutThunkCreator = () => async (dispatch: Dispatch) => {
    dispatch(styleActions.toggleIsLoadedAC(false))
    try {
        const token = localStorage.token
        const response = await AuthAPI.logout(token)
        if (response.status === 204) {
            dispatch(userActions.setAuth({}, false))
            removeDataFromLocalStorage('token')
            removeDataFromLocalStorage('user')
            dispatch(styleActions.toggleIsLoadedAC(true))

        } else {
            toast.error('Coś poszło nie tak', {autoClose: 5000})
            dispatch(styleActions.toggleIsLoadedAC(true))
        }
    } catch (error) {
        toast.error((error as AxiosError).response?.data.message)
    }

}

export const forgotPasswordThunkCreator = (email: string) => {
    return (dispatch: Dispatch) => {
        dispatch(styleActions.toggleIsLoadedAC(false))
        AuthAPI.forgotPassword(email)
            .then(() => {
            })
            .catch((error: AxiosError) => {
                toast.error(error?.response?.data.message)
            }).finally(() => {
            dispatch(styleActions.toggleIsLoadedAC(true))
        })
    }
}

export const setUserPhotoThunkCreator = (userId: number, token: string, file: any) => async (dispatch: Dispatch) => {
    dispatch(styleActions.toggleIsLoadedAC(false))
    try {
        let response = await userAPI.setProfilePhoto(userId, token, file)
        dispatch(userActions.setPhoto(response.data.data.photo))
        setDataToLocalStorage('user', JSON.stringify(response.data.data))
    } catch (error) {
        toast.error((error as AxiosError).response?.data.message)
    } finally {
        dispatch(styleActions.toggleIsLoadedAC(true))
    }

}

// Scaffolding functions

export const setUserToStateAndStorage =
    (dispatch: Dispatch,
     userData: any,
     isAuth: boolean,
     accessTokenName?: string | undefined,
     accessTokenData?: string | undefined) => {
        debugger
        dispatch(userActions.setAuth(userData, isAuth))
        setDataToLocalStorage('user', JSON.stringify(userData))
        if (accessTokenName && accessTokenData) {
            setDataToLocalStorage(accessTokenName, accessTokenData)
        }
    }

export const setUserFromLocalStorage = () => {
    return (dispatch: Dispatch) => {
        const userFromLocalstorage = window.localStorage.getItem('user')
        if (userFromLocalstorage) {
            dispatch(userActions.setAuth(JSON.parse(userFromLocalstorage), true))
        }
    }
}

function accessHandler(response: any) {
    if (response) {
        toast('Jesteś zalogowany', {autoClose: 5000})
    }
}

export function errorHandler(error: any) {
    if (error?.length) {
        error.forEach((el: any) => {
            toast.error(el.message, {autoClose: 5000})
        })
    }
}

export default userSlice.reducer
export const { setAuth, setProfileInfo, setPhoto } = userSlice.actions;

export type initialStateType = typeof initialState