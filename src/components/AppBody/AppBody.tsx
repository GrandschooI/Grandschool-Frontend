import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import s from './AppBody.module.scss'
import InfoContainer from './Info/InfoContainer'
import Teachers from './Teachers/Teachers'
import NotFoundContainer from './NotFound/NotFoundContainer'
import ProfileContainer from './Profile/ProfileContainer'
import AuthPageContainer from './AuthPages/AuthPageContainer'
import cn from 'classnames';
import {propsType} from './AppBodyContainer';
import Payment from './Payment/Payment'
import AboutUs from './AboutUs/AboutUs';
import Course from './Course/Course';
import HomePage from './HomePage/HomePage';

const AppBody: React.FC<propsType> = ({isOptionsOpen}) => {
  return (
    <div className={cn(s.appBody, isOptionsOpen ? s.openedBlindOption : '')}>
      <Switch>
        <Route exact path="/" render={() => <HomePage/>}/>
        <Route path="/registration" render={() => <AuthPageContainer/>}/>
        <Route path="/confirm-registration" render={() => <AuthPageContainer/>}/>
        <Route path="/login" render={() => <AuthPageContainer/>}/>
        <Route path="/profile" render={() => <ProfileContainer/>}/>
        <Route path="/about-us" render={() => <AboutUs/>}/>
        <Route path="/course" render={() => <Course/>}/>
        <Route path="/teachers" render={() => <Teachers/>}/>
        <Route path="/info" render={() => <InfoContainer/>}/>
        <Route path="/payment" render={() => <Payment/>}/>
        <Route path="/not-found" render={() => <NotFoundContainer/>}/>
        <Redirect path="*" to={'/not-found'}/>
      </Switch>
    </div>
  )
}

export default AppBody