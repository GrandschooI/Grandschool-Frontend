import React, {FC} from 'react';
import {RadioButton} from "../../../../common/Form/FormControls/FormControls";
import GreatIcon from "../../../../SVGConponents/ReviewIcons/GreatIcon";
import GoodIcon from "../../../../SVGConponents/ReviewIcons/GoodIcon";
import OkIcon from "../../../../SVGConponents/ReviewIcons/OKIcon";
import BadIcon from "../../../../SVGConponents/ReviewIcons/BadIcon";
import UglyIcon from "../../../../SVGConponents/ReviewIcons/UglyIcon";
import s from "./Review.module.scss";

const ReviewsAssessmentItems: FC<propsReviewsAssessmentItemsType> = ({statusAssessment, setStatusAssessment}) => {

  const getRadioStatus = (status: string) => {
    setStatusAssessment(status)
  }
  return (
    <>
      {
        radioAssessmentData.map((assessment, index) => {
            return (
              <li key={assessment.label}
                  className={statusAssessment === assessment.propValue ? assessmentStyles[index] : ''}>
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
          }
        )
      }
    </>
  )
}

export default ReviewsAssessmentItems;

const assessmentStyles = [s.activeGreen, s.activeLightOrange, s.activeOrange, s.activeDarkOrange, s.activeRed]
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

type propsReviewsAssessmentItemsType = {
  statusAssessment: string
  setStatusAssessment: (status: string) => void
}