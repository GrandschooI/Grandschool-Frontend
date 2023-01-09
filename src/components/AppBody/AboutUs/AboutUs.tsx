import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import cn from 'classnames'
import s from './AboutUs.module.scss'
import Project from './AboutUsContent/Project/Project'
import News from './AboutUsContent/News/News'
import AsideContainer, {AsideItemsType} from '../../common/Aside/AsideContainer'
import {Nullable} from '../../../Redux/redux-store'
import ReviewContainer from './AboutUsContent/Reviews/ReviewContainer'

const AboutUs: React.FC<propsType> = ({asideItems, isOptionsOpen, themeStyle}) => {
  return (
    <section
      className={cn(s.aboutUsSection, s[themeStyle ? themeStyle : ''], s[isOptionsOpen ? 'blindOptionsOpen' : ''])}>
      <div className={cn(s.aboutUsBody, 'container')}>
        <h2>O nas</h2>
        <AsideContainer themeStyle={themeStyle} asideItems={asideItems}/>

        <Switch>
          <Route path="/about-us/project" render={Project}/>
          <Route path="/about-us/news" render={News}/>
          <Route path="/about-us/reviews" render={() => <ReviewContainer/>}/>
          <Redirect path="/about-us" to={'/about-us/project'}/>
        </Switch>
      </div>
    </section>
  )
}

export default AboutUs

type propsType = {
  asideItems: AsideItemsType
  blindMode: boolean
  themeStyle: Nullable<string>
  images: boolean
  fontSize: Nullable<string>
  isOptionsOpen: boolean
}
