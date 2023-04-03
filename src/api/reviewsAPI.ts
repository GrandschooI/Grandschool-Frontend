import { instance } from './api'

import { sendFeedbackType } from 'Redux/reducers/infoSlice'

export const reviewsAPI = {
  sendFeedback(reviewsFormData: sendFeedbackType) {
    const formData = new FormData()

    if (reviewsFormData.attachment) {
      formData.append('attachment', reviewsFormData.attachment)
    }
    formData.append('text', reviewsFormData.text)
    formData.append('assessment', reviewsFormData.assessment)

    return instance.post('reviews', formData)
  },
  getFeedback(page: number) {
    return instance.get(`reviews?page=${page}`)
  },
}
