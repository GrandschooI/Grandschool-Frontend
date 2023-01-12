import {instance} from './api'

export const userAPI = {
  setProfilePhoto(userId: number, token: string, photoFile: any) {
    const formData = new FormData()
    formData.append('photo', photoFile)
    return (
      instance.post(`users/${userId}/upload-photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer ' + token,
          "Accept": "application/json"
        }
      })
    )
  },
    verifyMail (getParam: string) {
        return (
            instance.post
        )
    }
}