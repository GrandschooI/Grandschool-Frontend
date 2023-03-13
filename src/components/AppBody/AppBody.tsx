import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import s from './AppBody.module.scss'
import Teachers from './Teachers/Teachers'
import cn from 'classnames';
import Payment from './Payment/Payment'
import AboutUs from './AboutUs/AboutUs';
import Course from './Course/Course';
import HomePage from './HomePage/HomePage';
import Info from './Info/Info';
import NotFound from './NotFound/NotFound';
import Profile from './Profile/Profile';
import {useAppSelector} from '../../utils/Hooks/useAppSelector';
import {getOptionsState, getThemeStyle} from "../../Redux/selectors/styleSelector";
import AuthPage from './AuthPages/AuthPage';
import ConfirmMail from "./ConfirmMail/ConfirmMail";
import CourseActivation from "./CourseActivation/CourseActivation";

const AppBody = () => {
    const isOptionsOpen = useAppSelector(getOptionsState)
    return (
        <div className={cn(s.appBody, isOptionsOpen ? s.openedBlindOption : '')}>

            <Switch>
                <Route exact path={"/"} render={() => <HomePage/>}/>
                <Route path="/registration" render={() => <AuthPage/>}/>
                <Route path="/confirm-registration" render={() => <AuthPage/>}/>
                <Route path="/login" render={() => <AuthPage/>}/>
                <Route path="/profile" render={() => <Profile/>}/>
                <Route path="/about-us" render={() => <AboutUs/>}/>
                <Route path="/course" render={() => <Course/>}/>
                <Route path="/teachers" render={() => <Teachers/>}/>
                <Route path="/info" render={() => <Info/>}/>
                <Route path="/payment" render={() => <Payment/>}/>
                <Route path="/email-verification" render={() => <ConfirmMail/>}/>
                <Route path="/not-found" render={() => <NotFound/>}/>
                <Route path="/course-activation" render={() => <CourseActivation/>}/>
                <Redirect path="*" to={'/not-found'}/>
            </Switch>
        </div>
    )

    </div>
  )
}

export default AppBody