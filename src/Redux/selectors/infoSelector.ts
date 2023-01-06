import {appStateType} from '../redux-store'
import {websitesTopic} from '../reducers/infoReducer'

export const getWebsites = (state: any): Array<websitesTopic> => {
  return state.info.websites.map((el: any) => {
    return {itemTitle: el.name, itemLink: el.link}
  })
}

export const getInfoAboutUs = (state: appStateType): Array<object> => {
  return state.info.aboutUs
}

export const getInfoMenu = (state: appStateType): Array<object> => {
  return state.info.infoPageAsideMenu.map(el => {
    return {itemLink: el.itemLink, itemTitle: el.itemTitle, topics: el.topics}
  })
}