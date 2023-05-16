import React from 'react'

import cn from 'classnames'
import { Redirect, Route, Switch } from 'react-router-dom'

import { getInfoAboutUs } from '../../../Redux/selectors/infoSelector'
import { getFontSize, getOptionsState, getThemeStyle } from '../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../utils/Hooks/useAppSelector'
import { activeThemeStyle } from '../../../utils/scaffolding'
import Aside from '../../common/Aside/Aside'

import s from './AboutUs.module.scss'
import News from './AboutUsContent/News/News'
import Project from './AboutUsContent/Project/Project'
import ReviewPage from './AboutUsContent/ReviewPage/ReviewPage'

const AboutUs = () => {
  const themeStyle = useAppSelector(getThemeStyle)
  const isOptionsOpen = useAppSelector(getOptionsState)
  const asideItems = useAppSelector(getInfoAboutUs)
  const fontSize = useAppSelector(getFontSize)

  return (
    <section
      className={cn(
        s.aboutUsSection,
        s[activeThemeStyle(themeStyle)],
        s[isOptionsOpen ? 'blindOptionsOpen' : ''],
        s[fontSize],
        'container'
      )}
    >
      <h1>O nas</h1>
      <div className={cn(s.aboutUsBody)}>
        <Aside asideItems={asideItems} />
        <Switch>
          <Route path="/about-us/project" render={() => <Project />} />
          <Route path="/about-us/news" render={() => <News />} />
          <Route path="/about-us/reviews" render={() => <ReviewPage />} />
          <Redirect path="/about-us" to={'/about-us/project'} />
        </Switch>
      </div>
    </section>
  )
}

export default AboutUs
