import {Action, applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import styleReducer from './reducers/styleReducer'
import courseReducer from './reducers/courseReducer'
import infoReducer from './reducers/infoReducer'
import userReducer from "./reducers/userReducer"

const rootReducer = combineReducers({
  userData: userReducer,
  styleMode: styleReducer,
  courses: courseReducer,
  info: infoReducer
})

type rootReducerType = typeof rootReducer
export type appStateType = ReturnType<rootReducerType>

export type Nullable<T> = null | T
export type InferActionType<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, appStateType, unknown, A>


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
