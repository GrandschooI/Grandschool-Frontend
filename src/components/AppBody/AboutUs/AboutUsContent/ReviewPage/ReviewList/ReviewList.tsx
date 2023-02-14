import React from 'react';
import s from "../ReviewPage.module.scss";
import ReviewItem from "./ReviewItem/ReviewItem";
import {useAppSelector} from "../../../../../../utils/Hooks/useAppSelector";

const ReviewList = () => {
  const reviewTotalCount = useAppSelector(state => state.info.reviews.meta.total)

  return (
    <>
      <p>Łączna liczba recenzji: {reviewTotalCount}</p>

      <ul className={s.reviewList}>
          <ReviewItem/>
      </ul>
    </>
  )
}

export default ReviewList;