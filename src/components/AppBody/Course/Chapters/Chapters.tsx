import React from 'react'

import { courseType } from '../../../../Redux/reducers/courseSlice'
import Comments from '../Comments/Comments'

import Chapter from './Chapter/Chapter'
import s from './Chapters.module.scss'

type courseDataTye = {
  courseData: courseType[]
}

const Chapters: React.FC<courseDataTye> = () => {
  return (
    <div className={s.chapterBlock}>
      <Chapter />
      <Comments />
    </div>
  )
}

export default Chapters
