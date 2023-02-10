import {InfoAPI, WebsiteCategoryItemType, WebsiteItemType} from "../../api/infoAPI";
import { createSlice } from "@reduxjs/toolkit";
import {Dispatch} from "redux";
import {styleActions} from "./styleReducer";
import {reviewsAPI} from "../../api/reviewsAPI";
import {InfoActions, sendFeedbackType} from "./infoReducer";
import {BaseThunkType, InferActionType} from "../redux-store";

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

const infoSlice = createSlice({
    name: 'info',
    initialState: initialState,
    reducers: {
        setWebsites (state: any, action: any) {
            state.websites = action.data
        },
        setWebsiteCategories (state: any, action: any) {
            state.infoPageAsideMenu[0].topics = action.data
        }
    }
})


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


export default infoSlice.reducer
export const { setWebsites, setWebsiteCategories } = infoSlice.actions;

// Types

type getWebsiteActionType = InferActionType<typeof InfoActions>
type ThunkType = BaseThunkType<getWebsiteActionType>