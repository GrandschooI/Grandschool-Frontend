import React from 'react'
import cn from 'classnames'
import Features from './Features/Features'
import Reviews from './Reviews/Reviews'
import Counter from './Counter/Counter'
import News from './News/News'
import Greetings from './Greetings/Greetings'
import s from './HomePage.module.scss'
import CallToActionContainer from './CallToAction/CallToActionContainer'
import Promises from './Promises/Promises'
import Donate from './Donate/Donate'
import {propsType} from './HomePageContainer'


const HomePage: React.FC<propsType> = ({blindMode, images, themeStyle, fontSize, isOptionsOpen}) => {
  return (
    <div className={cn(s.homepage, themeStyle ? s[themeStyle] : '', isOptionsOpen ? s.openedBlindOption : '')}>
      <CallToActionContainer/>
      <Greetings blindMode={blindMode} themeStyle={themeStyle} isOptionsOpen={isOptionsOpen}/>
      <Promises images={images} themeStyle={themeStyle} fontSize={fontSize}/>
      <Donate images={images} themeStyle={themeStyle} fontSize={fontSize}/>
      <News themeStyle={themeStyle} images={images} fontSize={fontSize}/>
      <Features themeStyle={themeStyle} images={images} fontSize={fontSize}/>
      <Counter themeStyle={themeStyle} fontSize={fontSize} images={images}/>
      <Reviews blindMode={blindMode} themeStyle={themeStyle} images={images} fontSize={fontSize}/>
    </div>
  )
}

export default HomePage
