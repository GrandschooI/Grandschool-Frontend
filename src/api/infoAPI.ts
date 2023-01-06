import {instance} from './api'


export const InfoAPI = {
  getWebsiteCategories () {
    return (
        instance.get<any>('website-categories')
            .then(response => response.data.data.records)
    )
  },
  getWebsites (category: any) {
    return (
        instance.get<any>(`websites?category=${category}`).then(response => response.data.data.records)
    )
  }
}