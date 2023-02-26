import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import cn from 'classnames'
import s from './AboutUs.module.scss'
import Project from './AboutUsContent/Project/Project'
import News from './AboutUsContent/News/News'
import {useAppSelector} from '../../../utils/Hooks/useAppSelector';
import {getOptionsState, getThemeStyle} from '../../../Redux/selectors/styleSelector';
import Aside from '../../common/Aside/Aside';
import {getInfoAboutUs} from '../../../Redux/selectors/infoSelector';
import ReviewPage from "./AboutUsContent/ReviewPage/ReviewPage";

const AboutUs = () => {
  const themeStyle = useAppSelector(getThemeStyle)
  const isOptionsOpen = useAppSelector(getOptionsState)
  const asideItems = useAppSelector(getInfoAboutUs)
  return (
    <section
      className={cn(s.aboutUsSection, s[themeStyle ? themeStyle : ''], s[isOptionsOpen ? 'blindOptionsOpen' : ''])}>
      <div className={cn(s.aboutUsBody, 'container')}>
        <h2>O nas</h2>
        <Aside asideItems={asideItems}/>

        <Switch>
          <Route path="/about-us/project" render={Project}/>
          <Route path="/about-us/news" render={News}/>
          <Route path="/about-us/reviews" render={() => <ReviewPage/>}/>
          <Redirect path="/about-us" to={'/about-us/project'}/>
        </Switch>
      </div>
    </section>
  )
}

export default AboutUs
