import React from 'react'
import Chapters from './Chapters/Chapters'
import CourseHeader from './CourseHeader/CourseHeader'
import s from './Course.module.scss'
import {courseType} from '../../../Redux/reducers/courseReducer'
import {Redirect, useLocation} from 'react-router-dom'
import Aside from '../../common/Aside/Aside';

type PropsType = {
  courseData: Array<courseType>
}

const Course: React.FC<PropsType> = ({courseData}) => {
  const location: string = useLocation().pathname
  return (
    <div className={'container'}>
      {location === '/course' && <Redirect to={courseData[0].itemLink}/>}
      <CourseHeader/>
      <div className={s.courseBody}>
        <Aside/>
        <Chapters courseData={courseData}/>
      </div>
    </div>
  )
}

export default Course