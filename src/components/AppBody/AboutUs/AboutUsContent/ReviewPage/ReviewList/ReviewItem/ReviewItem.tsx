import React, {FC} from 'react'
import s from './ReviewItem.module.scss'
import {reviewsRecordsType} from "../../../../../../../Redux/reducers/infoSlice"

type reviewItemType = {
    review: reviewsRecordsType
}

const ReviewItem: FC<reviewItemType> = ({review}) => {
  return (
    <li className={s.reviewItemWrapper}>
      <div>
        <div>
          <h3>{review.user?.name ? review.user?.name : 'Anonymous' }</h3>
          <p>{`${review.user?.city ?  review.user?.city : ''} ${review.user?.birthday}`} Uczestnik konkursu "Dziękuję za Internet 2020".</p>
        </div>
      </div>
      <p>
        {review.text}
      </p>
    </li>
  );
};

export default ReviewItem;