import React, {FC} from 'react';
import GreatIcon from "../../../../../../SVGConponents/ReviewIcons/GreatIcon";
import GoodIcon from "../../../../../../SVGConponents/ReviewIcons/GoodIcon";
import OkIcon from "../../../../../../SVGConponents/ReviewIcons/OKIcon";
import BadIcon from "../../../../../../SVGConponents/ReviewIcons/BadIcon";
import UglyIcon from "../../../../../../SVGConponents/ReviewIcons/UglyIcon";
import ReviewItem from "./ReviewItem/ReviewItem";

const ReviewsAssessmentList: FC<propsReviewsAssessmentListType> = ({statusAssessment, setStatusAssessment}) => {

  const getRadioStatus = (status: string) => {
    setStatusAssessment(status)
  }
  return (
    <>
      {
        radioAssessmentData.map((assessment, index) => {
            return (
              <ReviewItem
                key={assessment.label}
                index={index}
                icon={assessment.icon}
                name={assessment.name}
                propValue={assessment.propValue}
                label={assessment.label}
                handleChange={assessment.handleChange}
                getRadioStatus={getRadioStatus}
                checked={statusAssessment === assessment.propValue}
                statusAssessment={statusAssessment}
              />
            )
          }
        )
      }
    </>
  )
}

export default ReviewsAssessmentList;

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

type propsReviewsAssessmentListType = {
  statusAssessment: string
  setStatusAssessment: (status: string) => void
}