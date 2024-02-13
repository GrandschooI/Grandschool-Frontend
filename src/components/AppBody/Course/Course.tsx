import React from 'react'

import cn from 'classnames'
import { Redirect, useLocation } from 'react-router-dom'

import { getCourseData } from '../../../Redux/selectors/courseSelector'
import { getFontSize, getThemeStyle } from '../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../utils/Hooks/useAppSelector'
import { activeThemeStyle } from '../../../utils/scaffolding'
import Aside from '../../common/Aside/Aside'

import Chapters from './Chapters/Chapters'
import s from './Course.module.scss'
import CourseHeader from './CourseHeader/CourseHeader'

const Course = () => {
  const courseData = useAppSelector(getCourseData)
  const location: string = useLocation().pathname
  const courseAsideItems = useAppSelector(state => state.courses.courses)
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)

  return (
    <div className={cn('container', s[activeThemeStyle(themeStyle)], s.course, s[fontSize])}>
      {location === '/course' && <Redirect to={courseData[0].itemLink} />}
      <CourseHeader />
      <div className={s.courseBody}>
        <Aside asideItems={courseAsideItems} />
        <Chapters courseData={courseData} />
      </div>
    </div>
  )
}

export default Course
