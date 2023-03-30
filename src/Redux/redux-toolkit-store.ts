import { configureStore } from '@reduxjs/toolkit'
import { Action } from 'redux'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'

import courseSlice from './reducers/courseSlice'
import infoSlice from './reducers/infoSlice'
import styleSlice from './reducers/styleSlice'
import userSlice from './reducers/userSlice'

const store = configureStore({
  reducer: {
    userData: userSlice,
    styleMode: styleSlice,
    courses: courseSlice,
    info: infoSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
})

export type AppStateType = ReturnType<typeof store.getState>
export default store

export type Nullable<T> = null | T
export type InferActionType<T> = T extends { [key: string]: (...args: any[]) => infer U }
  ? U
  : never
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
>
