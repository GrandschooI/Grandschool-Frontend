import {GetItemsType, instance} from './api'


export const InfoAPI = {
  getWebsiteCategories () {
    return (
        instance.get<GetItemsType<WebsiteCategoryItemType>>('website-categories')
            .then(response => response.data.data.records)
    )
  },
  getWebsites (category: string) {
    return (
        instance.get<GetItemsType<WebsiteItemType>>(`websites?category=${category}`).then(response => response.data.data.records)
    )
  }
}


export type WebsiteCategoryItemType = {
  id: number
  name: string
  slug: string
}
export type WebsiteItemType = {
  id: number
  name: string
  category: string
  link: string
  description: string
  visible: boolean
}