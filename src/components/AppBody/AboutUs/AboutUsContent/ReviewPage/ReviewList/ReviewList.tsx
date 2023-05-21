import React, { useEffect } from 'react'

import cn from 'classnames'
import { useDispatch } from 'react-redux'

import {
  getReviewsThunkCreator,
  reviewsRecordsType,
} from '../../../../../../Redux/reducers/infoSlice'
import {
  getCurrentPage,
  getLastPage,
  getNextPageURL,
  getPrevPageURL,
  getReviewData,
  getTotalCount,
} from '../../../../../../Redux/selectors/infoSelector'
import { getFontSize } from '../../../../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../../../../utils/Hooks/useAppSelector'
import Pagination from '../../../../../common/Pagination/Pagination'
import { CommentItem } from '../../../../Course/Comments/CommentItem/CommentItem'
import s from '../ReviewPage.module.scss'

const ReviewList = () => {
  const dispatch = useDispatch()
  const reviewTotalCount = useAppSelector<number>(getTotalCount)
  const reviewsData = useAppSelector<Array<reviewsRecordsType>>(getReviewData)
  const lastPage = useAppSelector<number>(getLastPage)
  const currentPage = useAppSelector<number>(getCurrentPage)
  const nextPageURL = useAppSelector<string | null>(getNextPageURL)
  const prevPageURL = useAppSelector<string | null>(getPrevPageURL)
  const fontSize = useAppSelector(getFontSize)
  const sendCurrentPage = (page: number) => {
    dispatch(getReviewsThunkCreator(page))
  }

  useEffect(() => {
    dispatch(getReviewsThunkCreator(1))
  }, [])

  return (
    <div className={cn(s[fontSize], s.reviewList)}>
      <p className={s.reviewTotalCount}>Łączna liczba recenzji: {reviewTotalCount}</p>
      <ul className={s.reviewList}>
        {reviewsData.map(review => {
          return <CommentItem key={review.id} /> /*review={review}*/
        })}
      </ul>
      <Pagination
        sendCurrentPage={sendCurrentPage}
        currentPage={currentPage}
        lastPage={lastPage}
        prevPageURL={prevPageURL}
        nextPageURL={nextPageURL}
      />
    </div>
  )
}

export default ReviewList
