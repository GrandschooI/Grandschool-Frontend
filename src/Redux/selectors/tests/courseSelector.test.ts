import store, { AppStateType } from '../../redux-toolkit-store'
import { getCourseData } from '../courseSelector'

let rootState: AppStateType

beforeEach(() => {
  rootState = store.getState()
})

test('get courses data', () => {
  const courseData = getCourseData(rootState)
  const courseItemLink = courseData.map(course => course.itemLink)
  const rootCourseItemLink = rootState.courses.courses.map(curse => curse.itemLink)

  expect(courseData).toEqual(rootState.courses.courses)
  expect(courseData.length).toBe(rootState.courses.courses.length)
  expect(courseData).toBeDefined()
  expect(courseItemLink).toEqual(rootCourseItemLink)
})
