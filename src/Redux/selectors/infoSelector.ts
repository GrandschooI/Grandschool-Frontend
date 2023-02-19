import {AppStateType} from '../redux-store'
import {WebsiteItemType} from '../../api/infoAPI'
import {topicType} from '../reducers/courseSlice'
import {reviewsRecordsType} from "../reducers/infoReducer";


export const getWebsites = (state: any): Array<WebsiteItemType> => {
  return state.info.websites.map((el: any) => {
    return {itemTitle: el.name, itemLink: el.link}
  })
}

type AsideItemType = { itemTitle: string, itemLink: string, topics?: Array<topicType> }
export const getInfoAboutUs = (state: AppStateType): Array<AsideItemType> => {
  return state.info.aboutUs
}

export const getInfoMenu = (state: AppStateType): Array<object> => {
  return state.info.infoPageAsideMenu.map(el => {
    return {itemLink: el.itemLink, itemTitle: el.itemTitle, topics: el.topics}
  })
}

export const getTotalCount = (state: AppStateType): number => {
  return state.info.reviews.meta.total
}

export const getReviewData = (state: AppStateType): Array<reviewsRecordsType> => {
  return state.info.reviews.records
}

export const getLastPage = (state: AppStateType): number => {
  return state.info.reviews.meta.last_page
}

export const getCurrentPage = (state: AppStateType): number => {
  return state.info.reviews.meta.current_page
}

export const getNextPageURL = (state: AppStateType): string | null => {
  return state.info.reviews.meta.next_page_url
}

export const getPrevPageURL = (state: AppStateType): string | null => {
  return state.info.reviews.meta.previous_page_url
}