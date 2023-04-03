import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dispatch } from 'redux'

import { InfoAPI, WebsiteCategoryItemType, WebsiteItemType } from '../../api/infoAPI'
import { reviewsAPI } from '../../api/reviewsAPI'

import { toggleIsLoaded } from './styleSlice'

const initialState: initialInfoStateType = {
  aboutUs: [
    {
      itemLink: '/about-us/project',
      itemTitle: 'About project',
    },
    {
      itemLink: '/about-us/news',
      itemTitle: 'News',
    },
    {
      itemLink: '/about-us/reviews',
      itemTitle: 'Reviews',
    },
  ],
  infoPageAsideMenu: [
    {
      itemLink: '/info/websites',
      itemTitle: 'Websites',
      topics: [] as Array<topicType>,
    },
  ],
  reviews: {
    records: [
      {
        id: 1,
        user: {
          id: 2,
          name: 'Manager GrandSchool',
          email: 'manager@grandschool.com',
          phone: null,
          gender: null,
          birthday: null,
          country: null,
          city: null,
          description: null,
          photo: null,
          roles: ['manager'],
          verified: true,
          created_at: '2023-01-04T08:11:29.000000Z',
          updated_at: '2023-01-04T08:11:29.000000Z',
        },
        assessment: {
          key: 'Great',
          value: 5,
          description: 'Great',
        },
        text: 'hello',
        visible: false,
        attachment: null,
        created_at: '2023-01-23T19:04:44.000000Z',
        updated_at: '2023-01-23T19:04:44.000000Z',
      },
    ],
    meta: {
      current_page: 1,
      per_page: 1,
      from: 1,
      to: 1,
      previous_page_url: null,
      next_page_url: 'https://api.staging.grandschool.pl/api/reviews?page=2',
      has_more_pages: true,
      last_page: 1,
      total: 0,
    },
  } as reviewsDataType,
  websites: [] as Array<WebsiteItemType>,
}

const infoSlice = createSlice({
  name: 'info',
  initialState: initialState,
  reducers: {
    setWebsites(state = initialState, action: PayloadAction<websitesActionType>) {
      state.websites = action.payload
    },
    setWebsiteCategories(state = initialState, action: PayloadAction<websiteCategoriesActionType>) {
      state.infoPageAsideMenu[0].topics = action.payload
    },
    setReviewsData(state = initialState, action: PayloadAction<reviewsDataType>) {
      state.reviews = action.payload
    },
  },
})

export const getWebsitesThunkCreator = (category: string) => {
  return async (dispatch: Dispatch) => {
    await InfoAPI.getWebsites(category)
      .then((response: Array<WebsiteItemType>) => {
        dispatch(setWebsites(response))
      })
      .catch(error => {
        if (error instanceof ReferenceError) {
          console.log(error.message)
        }
      })
  }
}

export const getWebsitesCategoryThunkCreator = () => {
  return async (dispatch: Dispatch) => {
    dispatch(toggleIsLoaded({ isLoaded: false }))
    await InfoAPI.getWebsiteCategories()
      .then((response: Array<WebsiteCategoryItemType>) => {
        const websiteCategories = response.map(el => {
          return {
            topicTitle: el.name,
            topicLink: `/info/websites/${el.slug}`,
          }
        })

        dispatch(setWebsiteCategories(websiteCategories))
      })
      .catch(error => {
        if (error instanceof ReferenceError) {
          console.log(error.message)
        }
      })
      .finally(() => {
        dispatch(toggleIsLoaded({ isLoaded: true }))
      })
  }
}

export const sendFeedbackReviewsThunkCreator = (reviewsFormData: sendFeedbackType) => {
  return async (dispatch: Dispatch) => {
    dispatch(toggleIsLoaded({ isLoaded: false }))
    try {
      await reviewsAPI.sendFeedback(reviewsFormData)
    } catch (error) {
      if (error instanceof ReferenceError) {
        console.log(error.message)
      }
    } finally {
      dispatch(toggleIsLoaded({ isLoaded: true }))
    }
  }
}

export const getReviewsThunkCreator = (page: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await reviewsAPI.getFeedback(page)

      dispatch(setReviewsData(response.data.data))
    } catch (error) {
      if (error instanceof ReferenceError) {
        console.log(error.message)
      }
    }
  }
}

export default infoSlice.reducer
export const { setWebsites, setWebsiteCategories, setReviewsData } = infoSlice.actions

// Types

export type initialInfoStateType = {
  aboutUs: [
    {
      itemLink: string
      itemTitle: string
    },
    {
      itemLink: string
      itemTitle: string
    },
    {
      itemLink: string
      itemTitle: string
    }
  ]
  infoPageAsideMenu: [
    {
      itemLink: string
      itemTitle: string
      topics: Array<topicType>
    }
  ]
  reviews?: {
    records: Array<reviewsRecordsType>
    meta: reviewsMetaType
  }

  websites: Array<WebsiteItemType>
}

type websitesActionType = Array<WebsiteItemType>
type topicType = {
  topicTitle: string
  topicLink: string
}
type websiteCategoriesActionType = Array<topicType>
export type reviewsDataType = {
  records: Array<reviewsRecordsType>
  meta: reviewsMetaType
}

export type reviewsRecordsType = {
  id: number
  user: {
    id: number
    name: string
    email: string
    phone: null
    gender: null
    birthday: null
    country: null
    city: null
    description: null
    photo: null
    roles: [string]
    verified: boolean
    created_at: string
    updated_at: string
  }
  assessment: {
    key: string
    value: number
    description: string
  }
  text: string
  visible: boolean
  attachment: null
  created_at: string
  updated_at: string
}
export type reviewsMetaType = {
  current_page: number
  per_page: number
  from: number
  to: number
  previous_page_url: null
  next_page_url: string
  has_more_pages: boolean
  last_page: number
  total: number
}
export type sendFeedbackType = {
  user_id?: number
  assessment: string
  text: string
  attachment?: null | File
}
export type InitialStateType = typeof initialState
/*
type ThunkType = BaseThunkType<getWebsiteActionType>*/
