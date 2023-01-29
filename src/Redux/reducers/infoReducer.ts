import {BaseThunkType, InferActionType} from '../redux-store'
import {InfoAPI, WebsiteCategoryItemType, WebsiteItemType} from '../../api/infoAPI'
import {reviewsAPI} from "../../api/reviewsAPI";
import {styleActions} from "./styleReducer";
import {Dispatch} from "redux";


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
  setWebsiteCategories: (websiteCategories: any) => ({
    type: 'info/SET_WEBSITE_CATEGORIES',
    data: websiteCategories
  } as const)
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

export const getWebsitesCategoryThunkCreator = () => {
  return async (dispatch: Dispatch) => {
    dispatch(styleActions.toggleIsLoadedAC(false))
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
      .finally(() => {
        dispatch(styleActions.toggleIsLoadedAC(true))
      })
  }
}

export const sendFeedbackReviewsThunkCreator = (reviewsFormData: any)
  : ThunkType => {
  return async (dispatch) => {
    const reviewData = {
      assessment: Number(reviewsFormData.assessment),
      text: reviewsFormData.textareaAssessment,
    }
    try {
      await reviewsAPI.sendFeedback(reviewData)

    } catch (e) {
      console.log(e)
    }
  }
}


export default infoReducer


// Types

export type sendFeedbackType = {
  assessment: number | string,
  textareaAssessment: string,
  reviewAttached?: null
}

export type InitialStateType = typeof initialState
type getWebsiteActionType = InferActionType<typeof InfoActions>
type ThunkType = BaseThunkType<getWebsiteActionType>