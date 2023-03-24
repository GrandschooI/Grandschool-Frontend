import React from 'react'

import { Redirect, useLocation } from 'react-router-dom'

import { getCourseData } from '../../../Redux/selectors/courseSelector'
import { useAppSelector } from '../../../utils/Hooks/useAppSelector'
import Aside from '../../common/Aside/Aside'

import Chapters from './Chapters/Chapters'
import s from './Course.module.scss'
import CourseHeader from './CourseHeader/CourseHeader'

const Course = () => {
  const courseData = useAppSelector(getCourseData)
  const location: string = useLocation().pathname
  const courseAsideItems = useAppSelector(state => state.courses.courses)

  return (
    <div className={'container'}>
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
