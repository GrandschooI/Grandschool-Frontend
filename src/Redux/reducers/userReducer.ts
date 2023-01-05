import {toast} from 'react-toastify'
import {removeDataFromLocalStorage, setDataToLocalStorage} from '../../utils/scaffolding'
import {BaseThunkType, InferActionType, Nullable} from '../redux-store'
import {AuthAPI, AuthResponseType} from '../../api/authAPI'
import {userAPI} from "../../api/userAPI";

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

// Reducer

export const userReducer = (state = initialState, action: UserActionTypes): initialStateType => {
    switch (action.type) {
        case 'auth/SET_AUTH':
            return {
                ...state,
                currentUser: action.data.authData,
                isAuth: action.data.isAuth
            }
        case 'user/SET_USER_INFO':
            return {
                ...state,
                currentUser: {...state.currentUser,
                    name: action.data.name,
                    gender: action.data.gender,
                    birthday: action.data.birthDate,
                    country: action.data.country,
                    city: action.data.city,
                    description: action.data.aboutUserText,
                    photo: action.data.userPhoto
                }
            }
        case 'user/SET_PHOTO':
            return {
                ...state
            }
        default:
            return state
    }
}

// Actions

export const userActions = {
    setAuth: (authData: any, isAuth: boolean) => ({type: 'auth/SET_AUTH', data: {authData, isAuth}} as const),
    setProfileInfo: (name: string, gender: string, birthDate: Date, country: string, city: string, aboutUserText: string, userPhoto: string) => ({
        type: 'user/SET_USER_INFO', data: {name, gender, birthDate, country, city, aboutUserText, userPhoto}
    } as const),
    setPhoto: (photo: any) => ({type: 'user/SET_PHOTO', data: photo} as const)
}

// ThunkCreators

export const registerThunkCreator = (email: string, password: string, confirmPassword: string) => {
    return (dispatch: ThunkType) => {
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
            .catch((error: any) => {
                errorHandler(error)
            })
    }
}

export const loginThunkCreator = (email?: string, password?: string, driver?: string, access_token?: string) => {
    return (dispatch: ThunkType) => {
        AuthAPI.login(email, password, driver, access_token)
            .then((response: AuthResponseType) => {
                const userData = response.data
                if (userData) {
                    accessHandler(response)
                    setUserToStateAndStorage(dispatch, userData.user,
                        true, 'token', userData.access_token)
                }
            })
            .catch((error: any) => {
                const errorMesage = error.response.data.errors
                errorHandler(errorMesage)
            })
    }
}

export const logoutThunkCreator = (): ThunkType => async (dispatch) => {
    const token = localStorage.token
    const response = await AuthAPI.logout(token)
    if (response.status === 204) {
        dispatch(userActions.setAuth({}, false))
        removeDataFromLocalStorage('token')
        removeDataFromLocalStorage('user')
    } else {
        toast.error('Coś poszło nie tak', {autoClose: 5000})
    }
}

export const forgotPasswordThunkCreator = (email: string) => {
    return () => {
        AuthAPI.forgotPassword(email)
            .then(() => {
            })
            .catch((error: any) => {
                errorHandler(error)
            })
    }
}

export const setUserPhotoThunkCreator = (file: any) => async (dispatch: any) => {
    let response = await userAPI.setProfilePhoto(file)
    dispatch(userActions.setPhoto(response.data.data.photos))
}

// Scaffolding functions

export const setUserToStateAndStorage =
    (dispatch: any,
     userData: any,
     isAuth: boolean,
     accessTokenName?: string | undefined,
     accessTokenData?: string | undefined) => {
        dispatch(userActions.setAuth(userData, isAuth))
        setDataToLocalStorage('user', JSON.stringify(userData))
        if (accessTokenName && accessTokenData) {
            setDataToLocalStorage(accessTokenName, accessTokenData)
        }
    }

export const setUserFromLocalStorage = () => {
    return (dispatch: any) => {
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

function errorHandler(error: any) {
    if (error.length) {
        error.forEach((el: any) => {
            toast.error(el.message, {autoClose: 5000})
        })
    }
}

export default userReducer


// Types

export type initialStateType = typeof initialState
type UserActionTypes = InferActionType<typeof userActions>
type ThunkType = BaseThunkType<UserActionTypes>



