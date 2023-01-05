import React from 'react'
import s from './Teachers.module.scss'
import cn from 'classnames'

const Teachers = () => {
  return (
    <section className={cn(s.teachersWrapper, 'container')}>
      <h2>Teachers</h2>
    </section>
  )
}

export default Teachers