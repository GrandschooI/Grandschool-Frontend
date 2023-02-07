import React from 'react';
import {RadioButton} from "../../../../../../../common/Form/FormControls/FormControls";
import s from "../../../Review.module.scss";

const ReviewAssessmentItem: React.FC<propsReviewItemType> = (
  {
    label,
    getRadioStatus,
    checked,
    name,
    handleChange,
    propValue,
    icon,
    index,
    statusAssessment
  }
) => {
  return (
    <li key={label}
        className={statusAssessment === propValue ? assessmentStyles[index] : ''}>
      <label>
        {icon}
        {
          RadioButton({
            name: name,
            propValue: propValue,
            label: label,
            handleChange: handleChange,
            getRadioStatus: getRadioStatus,
            checked: checked
          })
        }
      </label>
    </li>
  );
};

export default ReviewAssessmentItem;

const assessmentStyles = [s.activeGreen, s.activeLightOrange, s.activeOrange, s.activeDarkOrange, s.activeRed]

type propsReviewItemType = {
  index: number
  label: string
  name: string
  propValue: string
  statusAssessment: string
  icon: React.ReactNode
  checked: boolean
  getRadioStatus: (status: string) => void
  handleChange: () => void
}

