import React from 'react'

import Comments from '../Comments/Comments'

import Chapter from './Chapter/Chapter'
import s from './Chapters.module.scss'

const Chapters: React.FC<any> = () => {
  return (
    <div className={s.chapterBlock}>
      <Chapter />
      <Comments />
    </div>
  )
}

export default Chapters
