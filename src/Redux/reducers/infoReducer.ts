import {BaseThunkType, InferActionType} from '../redux-store'
import {InfoAPI, WebsiteCategoryItemType, WebsiteItemType} from '../../api/infoAPI'


const initialState = {
  aboutUs: [
    {
      itemLink: '/about-us/project',
      itemTitle: 'About project'
    },
    {
      itemLink: '/about-us/news',
      itemTitle: 'News'
    },
    {
      itemLink: '/about-us/reviews',
      itemTitle: 'Reviews'
    }
  ],
  infoPageAsideMenu: [
    {
      itemLink: '/info/websites',
      itemTitle: 'Websites',
      topics: [] as any
    }
  ],
  websites: [] as Array<WebsiteItemType>
}

// Reducer

export const infoReducer = (state = initialState, action: getWebsiteActionType): InitialStateType => {
  switch (action.type) {
  case 'info/SET_WEBSITES':
    return {
      ...state,
      websites: action.data
    }

    case 'info/SET_WEBSITE_CATEGORIES':
      return {
        ...state,
        infoPageAsideMenu: [{...state.infoPageAsideMenu[0], topics: [...action.data]}]
      }

  default:
    return state
  }
}

// Actions

export const InfoActions = {
  setWebsites: (websites: Array<WebsiteItemType>) => ({type: 'info/SET_WEBSITES', data: websites} as const),
  setWebsiteCategories: (websiteCategories: any) => ({type: 'info/SET_WEBSITE_CATEGORIES', data: websiteCategories} as const)
}

// ThunkCreators

export const getWebsitesThunkCreator = (category: string): ThunkType => {
  return async (dispatch) => {
    await InfoAPI.getWebsites(category).then((response: Array<WebsiteItemType>) => {
      dispatch(InfoActions.setWebsites(response))
    })
      .catch((error: any) => {
        console.log(error)
      })
  }
}

export const getWebsitesCategoryThunkCreator = (): ThunkType  => {
  return async (dispatch) => {
    await InfoAPI.getWebsiteCategories().then((response: Array<WebsiteCategoryItemType>) => {
      const websiteCategories = response.map((el) => {
        return ({
          topicTitle: el.name,
          topicLink: `/info/websites/${el.slug}`
        })
      })
      dispatch(InfoActions.setWebsiteCategories(websiteCategories))
    })
        .catch((error: any) => {
          console.log(error)
        })
  }
}


export default infoReducer


// Types

export type InitialStateType = typeof initialState
type getWebsiteActionType = InferActionType<typeof InfoActions>
type ThunkType = BaseThunkType<getWebsiteActionType>