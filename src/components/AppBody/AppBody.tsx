import React from 'react'

import cn from 'classnames'
import { Redirect, Route, Switch } from 'react-router-dom'

import { activeThemeStyle } from '../../utils/scaffolding'

import AboutUs from './AboutUs/AboutUs'
import s from './AppBody.module.scss'
import AuthPage from './AuthPages/AuthPage'
import { ResetPassword } from './AuthPages/ResetPassword/ResetPassword'
import ConfirmMail from './ConfirmMail/ConfirmMail'
import Course from './Course/Course'
import CourseActivation from './CourseActivation/CourseActivation'
import HomePage from './HomePage/HomePage'
import Info from './Info/Info'
import NotFound from './NotFound/NotFound'
import Payment from './Payment/Payment'
import Profile from './Profile/Profile'
import Teachers from './Teachers/Teachers'

import { getOptionsState, getThemeStyle } from 'Redux/selectors/styleSelector'
import { useAppSelector } from 'utils/Hooks/useAppSelector'

const AppBody: React.FC<propsType> = ({ isHeaderChange }) => {
  const isOptionsOpen = useAppSelector(getOptionsState)
  const themeStyle = useAppSelector(getThemeStyle)

  return (
    <div
      className={cn(
        s.appBody,
        isHeaderChange ? s.defaultBody : '',
        isOptionsOpen ? s.openedBlindOption : '',
        activeThemeStyle(themeStyle),
        s[activeThemeStyle(themeStyle)]
      )}
    >
      <Switch>
        <Route exact path={'/'} render={() => <HomePage />} />
        <Route path="/registration" render={() => <AuthPage />} />
        <Route path="/login" render={() => <AuthPage />} />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/about-us" render={() => <AboutUs />} />
        <Route path="/course" render={() => <Course />} />
        <Route path="/teachers" render={() => <Teachers />} />
        <Route path="/info" render={() => <Info />} />
        <Route path="/payment" render={() => <Payment />} />
        <Route path="/email-verification" render={() => <ConfirmMail />} />
        <Route path="/reset-password" render={() => <ResetPassword />} />
        <Route path="/not-found" render={() => <NotFound />} />
        <Route path="/course-activation" render={() => <CourseActivation />} />
        <Redirect path="*" to={'/not-found'} />
      </Switch>
    </div>
  )
}

export default AppBody

type propsType = {
  isHeaderChange: boolean
}
