import {instance} from "./api";

export const reviewsAPI = {
  sendFeedback(reviewsFormData: any) {
    const formData = new FormData()
    if(reviewsFormData.attachment){
      formData.append('attachment', reviewsFormData.attachment)
    }
    formData.append('text', reviewsFormData.text)
    formData.append('assessment', reviewsFormData.assessment)
    return instance.post('reviews', formData)
  }
}
