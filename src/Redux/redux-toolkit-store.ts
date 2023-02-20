import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import infoSlice from "./reducers/infoSlice";
import courseSlice from "./reducers/courseSlice";
import userSlice from "./reducers/userSlice";
import styleSlice from "./reducers/styleSlice";
import {Action} from "redux";

const store = configureStore({
    reducer: {
        userData: userSlice,
        styleMode: styleSlice,
        courses: courseSlice,
        info: infoSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
})

export type AppStateType = ReturnType<typeof store.getState>
export default store

export type Nullable<T> = null | T
export type InferActionType<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>