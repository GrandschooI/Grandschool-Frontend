import { WebsiteItemType } from '../../api/infoAPI'
import { courseType, topicType } from '../reducers/courseSlice'
import { infoPageAsideMenuType, reviewsRecordsType } from '../reducers/infoSlice'
import { AppStateType } from '../redux-toolkit-store'

export const getWebsites = (
  state: AppStateType
): { itemTitle: string; itemLink: string; id?: number }[] => {
  return state.info.websites.map((el: WebsiteItemType) => {
    return { itemTitle: el.name, itemLink: el.link }
  })
}
export const getInfoMenu = (state: AppStateType): Array<infoPageAsideMenuType> => {
  return state.info.infoPageAsideMenu.map(el => {
    return { itemLink: el.itemLink, itemTitle: el.itemTitle, topics: el.topics }
  })
}
export const getInfoAboutUs = (state: AppStateType): Array<courseType> => state.info.aboutUs
export const getTotalCount = (state: AppStateType): number => state.info.reviews.meta.total
export const getReviewData = (state: AppStateType): Array<reviewsRecordsType> =>
  state.info.reviews.records
export const getLastPage = (state: AppStateType): number => state.info.reviews.meta.last_page
export const getCurrentPage = (state: AppStateType): number => state.info.reviews.meta.current_page
export const getNextPageURL = (state: AppStateType): string | null =>
  state.info.reviews.meta.next_page_url
export const getPrevPageURL = (state: AppStateType): string | null =>
  state.info.reviews.meta.previous_page_url

type AsideItemType = { itemTitle: string; itemLink: string; topics?: Array<topicType> }
