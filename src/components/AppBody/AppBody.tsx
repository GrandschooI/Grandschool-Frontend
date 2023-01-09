import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import s from './AppBody.module.scss'
import Teachers from './Teachers/Teachers'
import AuthPageContainer from './AuthPages/AuthPageContainer'
import cn from 'classnames';
import Payment from './Payment/Payment'
import AboutUs from './AboutUs/AboutUs';
import Course from './Course/Course';
import HomePage from './HomePage/HomePage';
import Info from './Info/Info';
import NotFound from './NotFound/NotFound';
import Profile from './Profile/Profile';
import {useAppSelector} from '../../utils/Hooks/useAppSelector';
import {getOptionsState} from '../../Redux/selectors/styleSelector';

const AppBody = () => {
  const isOptionsOpen = useAppSelector(getOptionsState)
  return (
    <div className={cn(s.appBody, isOptionsOpen ? s.openedBlindOption : '')}>
      <Switch>
        <Route exact path="/" render={() => <HomePage/>}/>
        <Route path="/registration" render={() => <AuthPageContainer/>}/>
        <Route path="/confirm-registration" render={() => <AuthPageContainer/>}/>
        <Route path="/login" render={() => <AuthPageContainer/>}/>
        <Route path="/profile" render={() => <Profile/>}/>
        <Route path="/about-us" render={() => <AboutUs/>}/>
        <Route path="/course" render={() => <Course/>}/>
        <Route path="/teachers" render={() => <Teachers/>}/>
        <Route path="/info" render={() => <Info/>}/>
        <Route path="/payment" render={() => <Payment/>}/>
        <Route path="/not-found" render={() => <NotFound/>}/>
        <Redirect path="*" to={'/not-found'}/>
      </Switch>
    </div>
  )
}

export default AppBody