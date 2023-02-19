import {AppStateType} from '../redux-store'
import {courseType} from '../reducers/courseSlice'

export const getCourseData = (state: AppStateType): Array<courseType> => {
  return state.courses.courses
}
