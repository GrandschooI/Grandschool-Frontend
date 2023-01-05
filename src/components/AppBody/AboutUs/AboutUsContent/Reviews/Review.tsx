import React from 'react'
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
import {Nullable} from '../../../../../Redux/redux-store'

const onSubmit = () => {
}

const Review:React.FC<PropsType> = ({themeStyle}) => {
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
                initialValues={{radioAssessment: '', textareaAssessment: ''}}
                onSubmit={onSubmit}
            >
                {({isSubmitting}) => (
                    <Form className={s.reviewForm}>
                        <span className={s.reviewCAT}>Give an overall assessment of our course</span>
                        <ul className={s.assesmentRadioList}>
                            <li className={s.active}>
                                <GreatIcon/>
                                {RadioButton({
                                    name: 'assessment',
                                    propValue: 'Great',
                                    label: 'Great',
                                    handleChange: () => {
                                    }
                                })}
                            </li>
                            <li>
                                <GoodIcon/>
                                {RadioButton({
                                    name: 'assessment',
                                    propValue: 'Good',
                                    label: 'Good',
                                    handleChange: () => {
                                    }
                                })}
                            </li>
                            <li>
                                <OkIcon/>
                                {RadioButton({
                                    name: 'assessment',
                                    propValue: 'Ok',
                                    label: 'Ok',
                                    handleChange: () => {
                                    }
                                })}
                            </li>
                            <li>
                                <BadIcon/>
                                {RadioButton({
                                    name: 'assessment',
                                    propValue: 'Bad',
                                    label: 'Bad',
                                    handleChange: () => {
                                    }
                                })}
                            </li>
                            <li>
                                <UglyIcon/>
                                {RadioButton({
                                    name: 'assessment',
                                    propValue: 'Very Bad',
                                    label: 'Very Bad',
                                    handleChange: () => {
                                    }
                                })}
                            </li>
                        </ul>

                        <span className={s.reviewCAT}>Leave your feedback</span>
                        <label className={s.textareaWrap}>
                            Tell us exactly what you liked or disliked about our course
                            <textarea
                                placeholder='- Who recommended our course to you?
- What you liked best?
- What you liked best, would you recommend our course to your friends?'/>
                        </label>

                        <div className={s.buttonWrapper}>
                            <label>
                                <input type="file" id={'reviewAttached'}/>
                                <button className={cn(s.reviewAttached, 'inverseBtn')}>
                                    <ClipIcon/>
                                    <span>Attach file</span>
                                    <small>File .jpg, .png, .svg to 2 MB.</small>
                                </button>
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

type PropsType = {
    blindMode: boolean
    themeStyle: Nullable<string>
    images: boolean
    fontSize: Nullable<string>
    isOptionsOpen: boolean
}
