import React from 'react'

import cn from 'classnames'

import { getFontSize, getThemeStyle } from '../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../utils/Hooks/useAppSelector'

import s from './Aside.module.scss'
import AsideItem from './AsideItem/AsideItem'

type PropsType = {
  asideItems: Array<any>
}

const Aside: React.FC<PropsType> = ({ asideItems }) => {
  const themeStyle = useAppSelector(getThemeStyle)

  const aside = cn(s.aside, s[themeStyle ? themeStyle : ''])
  const fontSize = useAppSelector(getFontSize)

  return (
    <aside className={aside}>
      <nav className={s.sidebar}>
        <ul>
          {asideItems.map((el, index) => (
            <AsideItem
              key={index}
              itemTitle={el.itemTitle}
              itemLink={el.itemLink}
              topics={el.topics ? el.topics : undefined}
              themeStyle={themeStyle}
              fontSize={fontSize}
            />
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Aside
