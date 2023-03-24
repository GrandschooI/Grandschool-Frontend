import { Nullable } from '../Redux/redux-toolkit-store'

import { instance } from './api'

export const AuthAPI = {
  register(emailOrPhone: string, password: string, password_confirmation: string) {
    let regData: RegDataType

    if (emailOrPhone.includes('@')) {
      regData = {
        email: emailOrPhone,
        password,
        password_confirmation,
      }
    } else {
      regData = {
        phone: emailOrPhone,
        password,
        password_confirmation,
      }
    }

    return instance
      .post<AuthResponseType>('signup', regData)
      .then(response => response.data)
      .finally()
  },
  login(email?: string, password?: string, driver?: string, access_token?: string) {
    return instance
      .post<AuthResponseType>('login', { email, password, driver, access_token })
      .then(response => response.data)
  },
  forgotPassword(email: string) {
    return instance
      .post<AuthResponseType>('forgot-password', { email })
      .then(response => response.data)
  },
  logout(token: string) {
    return instance
      .delete('logout', { headers: { Authorization: `Bearer ${token}` } })
      .then(response => response)
  },
}

export type AuthDataType = {
  access_token: string
  user: UserDataResponseType
}
export type AuthResponseType = {
  data: AuthDataType
  errors: [{ message: string }]
}
export type UserDataResponseType = {
  id: number
  name: Nullable<string>
  email: string
  phone: Nullable<string>
  gender: Nullable<string>
  birthday: Nullable<string>
  country: Nullable<string>
  city: Nullable<string>
  description: Nullable<string>
  photo: Nullable<string>
  roles: Array<string>
  email_verified: boolean
  created_at: string
  updated_at: string
}
export type RefreshTokenResponseType = {
  userId: string
  email: string
}

type RegDataType = {
  email?: string
  phone?: string
  password: string
  password_confirmation: string
}
