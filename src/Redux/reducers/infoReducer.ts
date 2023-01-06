import {BaseThunkType, InferActionType} from '../redux-store'
import {InfoAPI} from '../../api/infoAPI'


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
  websites: [] as Array<websitesTopic>
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
  setWebsites: (websites: Array<websitesTopic>) => ({type: 'info/SET_WEBSITES', data: websites} as const),
  setWebsiteCategories: (websiteCategories: any) => ({type: 'info/SET_WEBSITE_CATEGORIES', data: websiteCategories} as const)
}

// ThunkCreators

export const getWebsitesThunkCreator = (category: any): ThunkType => {
  return async (dispatch) => {
    await InfoAPI.getWebsites(category).then((response: any) => {
      dispatch(InfoActions.setWebsites(response))
    })
      .catch((error: any) => {
        console.log(error)
      })
  }
}

export const getWebsitesCategoryThunkCreator = (): ThunkType  => {
  return async (dispatch) => {
    await InfoAPI.getWebsiteCategories().then((response: any) => {
      const websiteCategories = response.map((el: any) => {
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
export type websitesTopic = {
    category: string,
    id: number,
    websites: Array<websiteType>
}
export type websiteType = {
    description: string
    id: number
    link: string
    name: string
    visible: boolean
}
type getWebsiteActionType = InferActionType<typeof InfoActions>
type ThunkType = BaseThunkType<getWebsiteActionType>