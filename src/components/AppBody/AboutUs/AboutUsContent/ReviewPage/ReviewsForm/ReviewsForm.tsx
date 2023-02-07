import React, {ChangeEvent, useState} from 'react';
import {sendFeedbackReviewsThunkCreator, sendFeedbackType} from "../../../../../../Redux/reducers/infoReducer";
import {Form, Formik} from "formik";
import s from "../Review.module.scss";
import cn from "classnames";
import ClipIcon from "../../../../../SVGConponents/ReviewIcons/ClipIcon";
import {useDispatch} from "react-redux";
import * as yup from "yup";
import ReviewsAssessmentList from "./ReviewAssessmentList/ReviewsAssessmentList";
import FormErrorMessage from "../../../../../utils/FormErrorMessage/FormErrorMessage";

const profileInfoFormSchema = yup.object().shape({
  assessment: yup.string()
    .required('required'),
  text: yup.string()
    .min(10, 'Minimum 10 characters')
    .max(500, 'Maximum 500 characters')
    .required('Write your review')

})

const ReviewsForm = () => {
  const dispatch = useDispatch()

  const [statusAssessment, setStatusAssessment] = useState('5')
  const [inputFilePathImg, setInputFilePathImg] = useState<string>('')
  const [inputFile, setInputFile] = useState<File | null>(null)


  const onChangeFileHandle = (event: ChangeEvent<HTMLInputElement>) => {
    let file = event.target.files && event.target.files[0];
    setInputFile(file)
    let reader = new FileReader();
    reader.onloadend = function () {
      file && setInputFilePathImg(URL.createObjectURL(file));
    };
    reader.readAsDataURL(file as Blob);
  }
  const deleteSelectedFileHandle = () => {
    setInputFile(null)
    setInputFilePathImg('')
  }
  const sendSubmitForm = (reviewsFormData: sendFeedbackType) => {
    const reviewsData = {
      assessment: reviewsFormData.assessment,
      text: reviewsFormData.text,
      attachment: inputFile
    }
    dispatch(sendFeedbackReviewsThunkCreator(reviewsData))
    setStatusAssessment('5')
    setInputFilePathImg('')
  }
  return (
    <Formik
      initialValues={{assessment: '5', text: '', attachment: null}}
      validationSchema={profileInfoFormSchema}
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={(reviewsFormData: sendFeedbackType, {resetForm}) => {
        sendSubmitForm(reviewsFormData)
        resetForm()
      }}
    >
      {({isSubmitting, handleChange, values, errors, touched}) => (
        <Form className={s.reviewForm}>
          <span className={s.reviewCAT}>Give an overall assessment of our course</span>
          <ul className={s.assesmentRadioList}>
            <ReviewsAssessmentList statusAssessment={statusAssessment} setStatusAssessment={setStatusAssessment}/>
          </ul>
          <span className={s.reviewCAT}>Leave your feedback</span>
          <label className={s.textareaWrap}>
            Tell us exactly what you liked or disliked about our course
            <textarea className={touched.text && errors.text ? 'errorTextField' : ''} name={'text'} onChange={handleChange} value={values.text} placeholder="- Who recommended our course to you?
- What you liked best?
- What you liked best, would you recommend our course to your friends?"/>
            {touched.text && errors.text && <FormErrorMessage>{errors.text}</FormErrorMessage>}
          </label>

          <div className={s.buttonWrapper}>
            {!inputFilePathImg ?
              <label>
                <input onChange={onChangeFileHandle} name={'reviewAttached'} type="file"
                       accept=".png, .jpg, .jpeg, .gif"
                       id={'reviewAttached'}/>
                <label htmlFor={'reviewAttached'} className={cn(s.reviewAttached, 'inverseBtn')}>
                  <ClipIcon/>
                  <span>Attach file</span>
                  <small>File .jpg, .png, .svg to 2 MB.</small>
                </label>
              </label>
              : <div className={s.reviewsFile}>
                <img style={{width: '100%'}} src={inputFilePathImg} alt="file"/>
                <button className={s.reviewsFileDelete} onClick={deleteSelectedFileHandle}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px">
                    <path fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="3"
                          d="M29.5,11.5V11c0-3-2.5-5.5-5.5-5.5S18.5,8,18.5,11v0.5"/>
                    <line x1="7.5" x2="40.5" y1="11.5" y2="11.5" fill="none" stroke="#fff" strokeLinecap="round"
                          strokeMiterlimit="10" strokeWidth="3"/>
                    <line x1="36.5" x2="38" y1="27" y2="11.5" fill="none" stroke="#fff" strokeLinecap="round"
                          strokeMiterlimit="10" strokeWidth="3"/>
                    <path fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3"
                          d="M10.7,18.6l2,20.3c0.2,2.1,1.9,3.6,4,3.6h14.7c2.1,0,3.8-1.6,4-3.6l0.5-4.8"/>
                  </svg>
                </button>
              </div>
            }
            <button type="submit" disabled={isSubmitting} className={cn(s.sendFeedback, 'submitBtn')}>
              Send Feedback
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ReviewsForm;



