import React from 'react'

import { PopupSection } from '../../common/PopupSection/PopupSection'

import { CourseActivationContent } from './CourseActivationContent/CourseActivationContent'

const CourseActivation = () => {
  return (
    <PopupSection title="Активация курса">
      <CourseActivationContent />
    </PopupSection>
  )
}

export default CourseActivation
