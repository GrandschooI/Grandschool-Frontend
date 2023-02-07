import React from 'react';
import s from "../Review.module.scss";
import ReviewItem from "./ReviewItem/ReviewItem";

const ReviewList = () => {
  return (
    <>
      <p>Łączna liczba recenzji: 109</p>

      <ul className={s.reviewList}>
          <ReviewItem/>
      </ul>
    </>
  );
};

export default ReviewList;