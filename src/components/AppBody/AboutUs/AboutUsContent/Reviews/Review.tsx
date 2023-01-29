import React, {useState} from 'react'
import s from './Review.module.scss'
import feedBackImgWebp from '../../../../../assets/images/webp/feedbackIMG.webp'
import feedBackImg from '../../../../../assets/images/feedbackIMG.jpg'
import Image from 'react-image-webp'
import {Form, Formik} from 'formik'
import cn from 'classnames'
import {RadioButton} from '../../../../common/Form/FormControls/FormControls'
import GreatIcon from '../../../../SVGConponents/ReviewIcons/GreatIcon'
import GoodIcon from '../../../../SVGConponents/ReviewIcons/GoodIcon'
import OkIcon from '../../../../SVGConponents/ReviewIcons/OKIcon'
import BadIcon from '../../../../SVGConponents/ReviewIcons/BadIcon'
import UglyIcon from '../../../../SVGConponents/ReviewIcons/UglyIcon'
import ClipIcon from '../../../../SVGConponents/ReviewIcons/ClipIcon'
import {useAppSelector} from '../../../../../utils/Hooks/useAppSelector';
import {getThemeStyle} from '../../../../../Redux/selectors/styleSelector';
import * as yup from "yup";
import {useDispatch} from "react-redux";
import {sendFeedbackReviewsThunkCreator} from "../../../../../Redux/reducers/infoReducer";

const profileInfoFormSchema = yup.object().shape({
  // assessment: yup.boolean(),
  textareaAssessment: yup.string(),
})
const Review = () => {
  const dispatch = useDispatch()
  const themeStyle = useAppSelector(getThemeStyle)

  const [statusAssessment, setStatusAssessment] = useState('')

  const getRadioStatus = (status: string) => {
    setStatusAssessment(status)
  }
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

      <Formik
        initialValues={{assessment: '', textareaAssessment: '', reviewAttached: null}}
        validationSchema={profileInfoFormSchema}
        validateOnBlur={true}
        validateOnChange={true}
        onSubmit={(reviewsFormData) => {
          dispatch(sendFeedbackReviewsThunkCreator(reviewsFormData))
        }}
      >
        {({isSubmitting, handleChange,values}) => (
          <Form className={s.reviewForm}>
            <span className={s.reviewCAT}>Give an overall assessment of our course</span>
            <ul className={s.assesmentRadioList}>
              {
                radioAssessmentData.map(assessment => {
                  return (
                    <li key={assessment.label} className={statusAssessment === assessment.propValue ? s.active_green : ''}>
                      <label>
                        {assessment.icon}
                        {
                          RadioButton({
                            name: assessment.name,
                            propValue: assessment.propValue,
                            label: assessment.label,
                            handleChange: assessment.handleChange,
                            getRadioStatus: getRadioStatus,
                            checked: statusAssessment === assessment.propValue
                          })
                        }
                      </label>
                    </li>
                  )
                })
              }
            </ul>

            <span className={s.reviewCAT}>Leave your feedback</span>
            <label className={s.textareaWrap}>
              Tell us exactly what you liked or disliked about our course
              <textarea name={'textareaAssessment'} onChange={handleChange} value={values.textareaAssessment} placeholder="- Who recommended our course to you?
- What you liked best?
- What you liked best, would you recommend our course to your friends?"/>
            </label>

            <div className={s.buttonWrapper}>
              <label>
                <input name={'reviewAttached'} type="file" accept=".png, .jpg, .jpeg, .gif" id={'reviewAttached'}/>
                <label htmlFor={'reviewAttached'} className={cn(s.reviewAttached, 'inverseBtn')}>
                  <ClipIcon/>
                  <span>Attach file</span>
                  <small>File .jpg, .png, .svg to 2 MB.</small>
                </label>
              </label>
              <button type="submit" disabled={isSubmitting} className={cn(s.sendFeedback, 'submitBtn')}>
                Send Feedback
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <p>Łączna liczba recenzji: 109</p>

      <ul className={s.reviewList}>
        <li>
          <div>
            <img src="src/components/AppBody/AboutUs/AboutUsContent/Reviews" alt=""/>

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

const radioAssessmentData = [
  {
    icon: <GreatIcon/>,
    name: 'assessment',
    propValue: '5',
    label: 'Great',
    checked: true,
    getRadioStatus: () => {
    },
    handleChange: () => {
    }
  },
  {
    icon: <GoodIcon/>,
    name: 'assessment',
    propValue: '4',
    label: 'Good',
    checked: true,
    getRadioStatus: () => {
    },
    handleChange: () => {
    }
  },
  {
    icon: <OkIcon/>,
    name: 'assessment',
    propValue: '3',
    label: 'Ok',
    checked: true,
    getRadioStatus: () => {
    },
    handleChange: () => {
    }
  },
  {
    icon: <BadIcon/>,
    name: 'assessment',
    propValue: '2',
    label: 'Bad',
    checked: true,
    getRadioStatus: () => {
    },
    handleChange: () => {
    }
  },
  {
    icon: <UglyIcon/>,
    name: 'assessment',
    propValue: '1',
    label: 'Very Bad',
    checked: true,
    getRadioStatus: () => {
    },
    handleChange: () => {
    }
  },
]