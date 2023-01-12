import React from 'react'
import cn from 'classnames'
import Features from './Features/Features'
import Reviews from './Reviews/Reviews'
import Counter from './Counter/Counter'
import News from './News/News'
import Greetings from './Greetings/Greetings'
import s from './HomePage.module.scss'
import Promises from './Promises/Promises'
import Donate from './Donate/Donate'
import CallToAction from './CallToAction/CallToAction';
import {useAppSelector} from '../../../utils/Hooks/useAppSelector';
import {getOptionsState, getThemeStyle} from '../../../Redux/selectors/styleSelector';


const HomePage = () => {

  const themeStyle = useAppSelector(getThemeStyle)
  const isOptionsOpen = useAppSelector(getOptionsState)

  return (
    <div className={cn(s.homepage, themeStyle ? s[themeStyle] : '', isOptionsOpen ? s.openedBlindOption : '')}>
      <CallToAction/>
      <Greetings/>
      <Promises/>
      <Donate/>
      <News/>
      <Features/>
      <Counter/>
      <Reviews/>
    </div>
  )
}

export default HomePage
