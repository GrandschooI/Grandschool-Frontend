import React, { useEffect, useState } from 'react'

import cn from 'classnames'
import { useLocation } from 'react-router-dom'

import { topicType } from '../../../../Redux/reducers/courseSlice'
import { Nullable } from '../../../../Redux/redux-toolkit-store'
import { activeFontSize, activeThemeStyle } from '../../../../utils/scaffolding'

import s from './AsideItem.module.scss'
import AsideItemWithoutTopics from './AsideItemWithoutTopics'
import AsideItemWithTopics from './AsideItemWithTopics'

const AsideItem: React.FC<PropsType> = ({ itemTitle, itemLink, topics, themeStyle, fontSize }) => {
  const location: string = useLocation().pathname
  const [activeItem, setActiveItem] = useState(false)

  useEffect(() => {
    if (location.includes(itemLink)) {
      setActiveItem(true)
    }
  }, [location, itemLink])

  return (
    <li className={cn(s.asideItem, s[activeThemeStyle(themeStyle)], s[activeFontSize(fontSize)])}>
      {!topics ? (
        <AsideItemWithoutTopics itemTitle={itemTitle} itemLink={itemLink} location={location} />
      ) : (
        <AsideItemWithTopics
          activeItem={activeItem}
          itemTitle={itemTitle}
          location={location}
          itemLink={itemLink}
          setActiveItem={setActiveItem}
          topics={topics}
        />
      )}
    </li>
  )
}

export default AsideItem

type PropsType = {
  itemTitle: Nullable<string>
  itemLink: string
  topics?: Array<topicType>
  themeStyle: Nullable<string>
  fontSize: Nullable<string>
}
