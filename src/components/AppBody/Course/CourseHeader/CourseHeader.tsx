import React from 'react'
import s from './CourseHeader.module.scss'

const CourseHeader = () => {
  return (
    <div className={s.courseHeaderBlock}>
      <div className={s.courseHeaderTitleBlock}>
        <h1>Podręcznik <span>kurs podstawowy</span></h1>
        <h3>W tej części przedstawiono kurs w 14 rozdziałach</h3>
      </div>
    </div>
  )
}

export default CourseHeader
