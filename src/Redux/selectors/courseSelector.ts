import {appStateType} from '../redux-store'
import {courseType} from '../reducers/courseReducer'

export const getCourseData = (state: appStateType): Array<courseType> => {
  return state.courses.courses
}
