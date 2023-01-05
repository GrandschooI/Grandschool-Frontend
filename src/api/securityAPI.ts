import {instance} from './api'

export const SecurityAPI = {
  getCaptchaURL() {
    return (
      instance.get('security/get-captcha-url')
    )
  }
}