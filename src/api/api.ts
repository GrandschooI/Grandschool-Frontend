import axios from 'axios'

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://api.staging.grandschool.pl/api/',
  headers: {
  }
})

export type ResponseSuccessCodeType = 200
export type ResponseUnautorizeCodeType = 401
