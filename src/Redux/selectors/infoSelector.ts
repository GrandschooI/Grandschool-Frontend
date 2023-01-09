import {AppStateType} from '../redux-store'
import {WebsiteItemType} from '../../api/infoAPI'

export const getWebsites = (state: any): Array<WebsiteItemType> => {
  return state.info.websites.map((el: any) => {
    return {itemTitle: el.name, itemLink: el.link}
  })
}

export const getInfoAboutUs = (state: AppStateType): Array<object> => {
  return state.info.aboutUs
}

export const getInfoMenu = (state: AppStateType): Array<object> => {
  return state.info.infoPageAsideMenu.map(el => {
    return {itemLink: el.itemLink, itemTitle: el.itemTitle, topics: el.topics}
  })
}