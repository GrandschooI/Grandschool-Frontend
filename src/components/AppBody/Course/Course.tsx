import React from 'react'
import AsideContainer from '../../common/Aside/AsideContainer'
import Chapters from './Chapters/Chapters'
import CourseHeader from './CourseHeader/CourseHeader'
import s from './Course.module.scss'
import {courseType} from '../../../Redux/reducers/courseReducer'
import {Redirect, useLocation} from 'react-router-dom'

type PropsType = {
    courseData: Array<courseType>
}

const Course: React.FC<PropsType> = ({courseData}) => {
    const location: string = useLocation().pathname
    return (
        <div className={'container'}>
            {location === '/course' && <Redirect to={courseData[0].itemLink}/>}
            <CourseHeader/>
            <div className={s.courseBody}>
                <AsideContainer asideItems={courseData}/>
                <Chapters courseData={courseData}/>
            </div>
        </div>
    )
}

export default Course