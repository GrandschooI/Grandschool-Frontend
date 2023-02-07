import React from 'react'
import s from './Review.module.scss'
import feedBackImgWebp from '../../../../../assets/images/webp/feedbackIMG.webp'
import feedBackImg from '../../../../../assets/images/feedbackIMG.jpg'
import Image from 'react-image-webp'
import cn from 'classnames'
import {useAppSelector} from '../../../../../utils/Hooks/useAppSelector';
import {getThemeStyle} from '../../../../../Redux/selectors/styleSelector';
import ReviewsForm from "./ReviewsForm/ReviewsForm";
import ReviewList from "./ReviewList/ReviewList";


const ReviewPage = () => {
  const themeStyle = useAppSelector(getThemeStyle)

  return (
    <div className={cn(s.reviewBody, s[themeStyle ? themeStyle : ''], [themeStyle ? themeStyle : ''])}>
      <h3 className={s.reviewTitle}>Leave feedback</h3>
      <div className={s.reviewDescWrap}>
        <p>
          The text is something like. "Our school is trying to improve and make our product better and more
          convenient!
          We look forward to your feedback. <br/>
          <span>Share your impressions with us.</span>
        </p>
        <Image
          className={s.sign}
          src={feedBackImg}
          webp={feedBackImgWebp}
          alt="Feedback background"
        />
      </div>
      <ReviewsForm/>
      <ReviewList/>
    </div>
  )
}

export default ReviewPage