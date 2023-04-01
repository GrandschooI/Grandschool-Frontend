import React, { FC, memo } from 'react'

import cn from 'classnames'

import { getFontSize, getThemeStyle } from '../../../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../../../utils/Hooks/useAppSelector'

import { CommentBlock } from './CommentBlock/CommentBlock'
import s from './CommentItem.module.scss'

export const CommentItem: FC = memo(() => {
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)

  return (
    <div className={cn(s.wrapper, s[themeStyle ? themeStyle : ''], 'commentItem', s[fontSize])}>
      <CommentBlock />
      <div className={s.answers}>
        <CommentBlock withImg={false} />
      </div>
    </div>
  )
})
