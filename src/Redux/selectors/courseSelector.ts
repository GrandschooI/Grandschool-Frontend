import {courseType} from '../reducers/courseSlice'
import {AppStateType} from "../redux-toolkit-store";

export const getCourseData = (state: AppStateType): Array<courseType> => {
  return state.courses.courses
}
