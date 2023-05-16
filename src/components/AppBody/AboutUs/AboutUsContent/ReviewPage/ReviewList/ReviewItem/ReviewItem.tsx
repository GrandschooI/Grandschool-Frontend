import React, { FC } from 'react'

import cn from 'classnames'

import { reviewsRecordsType } from '../../../../../../../Redux/reducers/infoSlice'
import { getThemeStyle } from '../../../../../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../../../../../utils/Hooks/useAppSelector'
import { activeThemeStyle } from '../../../../../../../utils/scaffolding'

import s from './ReviewItem.module.scss'

type reviewItemType = {
  review: reviewsRecordsType
}
const ReviewItem: FC<reviewItemType> = ({ review }) => {
  const themeStyle = useAppSelector(getThemeStyle)
  const reviewItemWrapper = cn(s.reviewItemWrapper, s[activeThemeStyle(themeStyle)], [
    activeThemeStyle(themeStyle),
  ])

  return (
    <li className={reviewItemWrapper}>
      <div>
        <div>
          <h3>{review.user?.name ? review.user?.name : 'Anonymous'}</h3>
          <p>
            {`${review.user?.city ? review.user?.city : ''} ${review.user?.birthday}`} Uczestnik
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            konkursu "Dziękuję za Internet 2020".
          </p>
        </div>
      </div>
      <p>{review.text}</p>
    </li>
  )
}

export default ReviewItem
