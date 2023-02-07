import React from 'react'
import s from './Review.module.scss'
import feedBackImgWebp from '../../../../../assets/images/webp/feedbackIMG.webp'
import feedBackImg from '../../../../../assets/images/feedbackIMG.jpg'
import Image from 'react-image-webp'
import cn from 'classnames'
import {useAppSelector} from '../../../../../utils/Hooks/useAppSelector';
import {getThemeStyle} from '../../../../../Redux/selectors/styleSelector';
import ReviewsForm from "./ReviewPage/ReviewsForm/ReviewsForm";


const Review = () => {
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
      <p>Łączna liczba recenzji: 109</p>

      <ul className={s.reviewList}>
        <li>
          <div>
            <div>
              <h3>Agnieszka Nazim</h3>
              <p>m. Gdańsk, 56 lat, Uczestnik konkursu "Dziękuję za Internet 2020".</p>
            </div>
          </div>

          <p>
            "
            ..Ten internetowy podręcznik szkoleniowy dla starszych użytkowników był dla mnie nieocenioną
            pomocą w wyjaśnianiu tak trudnego materiału w bardzo prostych słowach.
            Uważam, że jest to nieoceniona pomoc metodologiczna, która pozwala wyjaśnić tak trudny materiał
            w bardzo prosty sposób.
            i zrozumiałym językiem dla zwykłych ludzi. Kiedyś wiedziałem co nieco o sprzęcie komputerowym,
            jak
            Wcześniej wiedziałem co nieco o komputerach, tworzeniu plików i folderów, używaniu aplikacji
            biurowych i wyszukiwaniu różnych informacji w Internecie.
            Ale po odbyciu kursu mogę teraz wrócić do Internetu i wysyłać e-maile."
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Review