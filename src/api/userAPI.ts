import {instance} from './api'

export const userAPI = {
    setProfilePhoto (photoFile: any) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return (
            instance.put(`profile/photo`, formData, {
                headers: {
                    "Content-Type":"multipart/form-data"
                }
            })
        )
    }
}