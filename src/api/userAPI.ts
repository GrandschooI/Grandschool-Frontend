import axios from 'axios'
import { FormikValues } from 'formik/dist/types'

import { Nullable } from '../Redux/redux-toolkit-store'

import { instance } from './api'

export const userAPI = {
  setProfilePhoto(userId: number, token: string, photoFile: string) {
    const formData = new FormData()

    formData.append('photo', photoFile)

    return instance.post(`users/${userId}/upload-photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    })
  },
  setProfileIfoForm(userId: Nullable<number>, token: string, userFormData: FormikValues) {
    return instance.put(`users/${userId}`, userFormData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },
  sendVerifyMail(payload: { email: Nullable<string> }) {
    const { email } = payload

    return instance.post('send-email-verification', { email })
  },
  sendPhoneVerify(payload: { phone: string }) {
    const { phone } = payload

    return instance.post('send-phone-verification', { phone })
  },
  confirmPhoneUser(payload: { phone: string; code: number }) {
    const { phone, code } = payload

    return instance.post('verification-phone', { phone, code })
  },
  verifyEmail(url: string) {
    return axios.post(url)
  },
  resetPassword(token: string, password: string) {
    return instance.post('reset-password', { token, password })
  },
}
