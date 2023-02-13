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
  reviews: {
    records: [
      {
        id: 1,
        user: {
          id: 2,
          name: "Manager GrandSchool",
          email: "manager@grandschool.com",
          phone: null,
          gender: null,
          birthday: null,
          country: null,
          city: null,
          description: null,
          photo: null,
          roles: [
            "manager"
          ],
          verified: true,
          created_at: "2023-01-04T08:11:29.000000Z",
          updated_at: "2023-01-04T08:11:29.000000Z"
        },
        assessment: {
          key: "Great",
          value: 5,
          description: "Great"
        },
        text: "hello",
        visible: false,
        attachment: null,
        created_at: "2023-01-23T19:04:44.000000Z",
        updated_at: "2023-01-23T19:04:44.000000Z"
      }
    ] as Array<feedbackResponseType>,
    meta: {
      current_page: 1,
      per_page: 1,
      from: 1,
      to: 1,
      previous_page_url: null,
      next_page_url: "https://api.staging.grandschool.pl/api/reviews?page=2",
      has_more_pages: true,
      last_page: 1,
      total: 46
    } as metaType,
  },
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
    case 'info/SET_RESPONSE_REVIEWS':
      return {
        ...state,
        reviews: {...action.data},
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
  } as const),
  setReviewsData: (reviewsData: any) => ({type: 'info/SET_RESPONSE_REVIEWS', data: reviewsData} as const)
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

export const sendFeedbackReviewsThunkCreator = (reviewsFormData: sendFeedbackType) => {
  return async (dispatch: Dispatch) => {
    dispatch(styleActions.toggleIsLoadedAC(false))
    try {
      await reviewsAPI.sendFeedback(reviewsFormData)
    } catch (error: any) {
      console.log(error)
    } finally {
      dispatch(styleActions.toggleIsLoadedAC(true))
    }
  }
}
export const getReviewsThunkCreator = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await reviewsAPI.getFeedback()
      dispatch(InfoActions.setReviewsData(response.data.data))
    } catch (error: any) {
      console.log(error)
    }
  }
}


export default infoReducer


// Types

export type metaType = {
  current_page: number,
  per_page: number,
  from: number,
  to: number,
  previous_page_url: null,
  next_page_url: string,
  has_more_pages: boolean,
  last_page: number,
  total: number
}

export type feedbackResponseType = {
  id: number,
  user: {
    id: number,
    name: string,
    email: string,
    phone: null,
    gender: null,
    birthday: null,
    country: null,
    city: null,
    description: null,
    photo: null,
    roles: [
      string
    ],
    verified: boolean,
    created_at: string,
    updated_at: string
  },
  assessment: {
    key: string,
    value: number,
    description: string
  },
  text: string,
  visible: boolean,
  attachment: null,
  created_at: string,
  updated_at: string
}

export type sendFeedbackType = {
  user_id?: number
  assessment: number | string,
  text: string,
  attachment?: null | File
}

export type InitialStateType = typeof initialState
type getWebsiteActionType = InferActionType<typeof InfoActions>
type ThunkType = BaseThunkType<getWebsiteActionType>