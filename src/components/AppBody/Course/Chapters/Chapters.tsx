import React from 'react'
import Chapter from './Chapter/Chapter'
import s from './Chapters.module.scss'


const Chapters:React.FC<any> = () => {
  return (
    <div className={s.chapterBlock}>
      <Chapter/>
    </div>
  )
}

export default Chapters