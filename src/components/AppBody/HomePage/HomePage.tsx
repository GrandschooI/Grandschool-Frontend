import React from 'react'

import cn from 'classnames'

import { getOptionsState, getThemeStyle } from '../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../utils/Hooks/useAppSelector'
import { activeThemeStyle } from '../../../utils/scaffolding'

import CallToAction from './CallToAction/CallToAction'
import Counter from './Counter/Counter'
import Donate from './Donate/Donate'
import Features from './Features/Features'
import Greetings from './Greetings/Greetings'
import s from './HomePage.module.scss'
import News from './News/News'
import Promises from './Promises/Promises'
import Reviews from './Reviews/Reviews'

const HomePage = () => {
  const themeStyle = useAppSelector(getThemeStyle)
  const isOptionsOpen = useAppSelector(getOptionsState)

  return (
    <div
      className={cn(
        s.homepage,
        s[activeThemeStyle(themeStyle)],
        isOptionsOpen ? s.openedBlindOption : ''
      )}
    >
      <CallToAction />
      <Greetings />
      <Promises />
      <Donate />
      <News />
      <Features />
      <Counter />
      <Reviews />
    </div>
  )
}

export default HomePage
