import {instance} from "./api";

export const reviewsAPI = {
    sendFeedback(reviewsFormData: any) {
        return instance.post('reviews', reviewsFormData )
    }
}
