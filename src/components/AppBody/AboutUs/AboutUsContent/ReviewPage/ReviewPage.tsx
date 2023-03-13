import React from 'react'
import s from './ReviewPage.module.scss'
import feedBackImgWebp from '../../../../../assets/images/webp/feedbackIMG.webp'
import feedBackImg from '../../../../../assets/images/feedbackIMG.jpg'
import Image from 'react-image-webp'
import cn from 'classnames'
import {useAppSelector} from '../../../../../utils/Hooks/useAppSelector';
import {getFontSize, getThemeStyle} from '../../../../../Redux/selectors/styleSelector';
import ReviewsForm from "./ReviewsForm/ReviewsForm";
import ReviewList from "./ReviewList/ReviewList";
import {NavLink} from "react-router-dom";
import {getAuthStatus} from "../../../../../Redux/selectors/userSelector";

const ReviewPage = () => {
    const isAuth = useAppSelector(getAuthStatus)
    const themeStyle = useAppSelector(getThemeStyle)
    const fontSize = useAppSelector(getFontSize)
    const changeTheme = (name: string) => cn(name, s[themeStyle ? themeStyle : ''], [themeStyle ? themeStyle : ''], s[fontSize])

    const reviewBody = changeTheme((s.reviewBody))
    const reviewTitle = changeTheme((s.reviewTitle))
    const reviewDescWrap = changeTheme((s.reviewDescWrap))
    return (
        <div className={reviewBody}>
            <h3 className={reviewTitle}>Leave feedback</h3>
            <div className={reviewDescWrap}>
                <p>
                    The text is something like. "Our school is trying to improve and make our product better and more
                    convenient!
                    We look forward to your feedback. <br/>
                    <span className={s.share}>Share your impressions with us.</span>
                </p>
                <Image
                    className={s.sign}
                    src={feedBackImg}
                    webp={feedBackImgWebp}
                    alt="Feedback background"
                />
            </div>
            {
                isAuth
                    ? <ReviewsForm/>
                    : <NavLink to={'/registration'}>go to register</NavLink>
            }
            <ReviewList/>
        </div>
    )
}

export default ReviewPage