import {InfoAPI, WebsiteCategoryItemType, WebsiteItemType} from "../../api/infoAPI";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Dispatch} from "redux";
import {reviewsAPI} from "../../api/reviewsAPI";
import {toggleIsLoaded} from "./styleSlice";


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
        setWebsites (state = initialState, action: PayloadAction<websitesActionType>) {
            state.websites = action.payload
        },
        setWebsiteCategories (state = initialState, action: PayloadAction<websiteCategoriesActionType>) {
            state.infoPageAsideMenu[0].topics = action.payload
        }
    }
})


/*export const getWebsitesThunkCreator = (category: string): Dispatch => {
    return async (dispatch) => {
        await InfoAPI.getWebsites(category).then((response: Array<WebsiteItemType>) => {
            dispatch(setWebsites(response))
        })
            .catch((error: any) => {
                console.log(error)
            })
    }
}*/

export const getWebsitesCategoryThunkCreator = () => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleIsLoaded({isLoaded: false}))
        await InfoAPI.getWebsiteCategories().then((response: Array<WebsiteCategoryItemType>) => {
            const websiteCategories = response.map((el) => {
                return ({
                    topicTitle: el.name,
                    topicLink: `/info/websites/${el.slug}`
                })
            })
            dispatch(setWebsiteCategories(websiteCategories))
        })
            .catch((error: any) => {
                console.log(error)
            })
            .finally(() => {
                dispatch(toggleIsLoaded({isLoaded: true}))
            })
    }
}

export const sendFeedbackReviewsThunkCreator = (reviewsFormData: sendFeedbackType) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleIsLoaded({isLoaded: false}))
        try {
            await reviewsAPI.sendFeedback(reviewsFormData)
        } catch (error: any) {
            console.log(error)
        } finally {
            dispatch(toggleIsLoaded({isLoaded: true}))
        }
    }
}


export default infoSlice.reducer
export const { setWebsites, setWebsiteCategories } = infoSlice.actions;

// Types

type websitesActionType = Array<WebsiteItemType>
type websiteCategoriesActionType = Array<any>
type metaType = {
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
type feedbackResponseType = {
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
type sendFeedbackType = {
    user_id?: number
    assessment: number | string,
    text: string,
    attachment?: null | File
}
/*
type ThunkType = BaseThunkType<getWebsiteActionType>*/
