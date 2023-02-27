import {instance} from './api'
import axios from "axios";
import {Nullable} from "../Redux/redux-toolkit-store";
import {setProfileActionType} from "../Redux/reducers/userSlice";

export const userAPI = {
  setProfilePhoto(userId: number, token: string, photoFile: any) {
    const formData = new FormData()
    formData.append('photo', photoFile)
    return (
      instance.post(`users/${userId}/upload-photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
          "Accept": "application/json"
        }
      })
    )
  },
  setProfileIfoForm(userId: Nullable<number>, token: string, userFormData: setProfileActionType) {
    return (
      instance.put(`users/${userId}`, userFormData, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
    )
  },
  verifyMail(url: string) {
    return (
      axios.create({withCredentials: true}).post(url)
    )
  }
}