import React from 'react';


import {CourseActivationContent} from './CourseActivationContent/CourseActivationContent';
import {PopupSection} from '../../common/PopupSection/PopupSection';

const CourseActivation = () => {

    return (
        <PopupSection title='Активация курса'>
            <CourseActivationContent/>
        </PopupSection>

    );
};

export default CourseActivation;


