import React, { FC, memo } from 'react'

import { CommentBlock } from './CommentBlock/CommentBlock'
import s from './CommentItem.module.scss'

export const CommentItem: FC = memo(() => {
  return (
    <div className={s.wrapper}>
      <CommentBlock />
      <div className={s.answers}>
        <CommentBlock withImg={false} />
      </div>
    </div>
  )
})
