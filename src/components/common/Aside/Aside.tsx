import React from 'react'
import s from './Aside.module.scss'
import AsideItem from './AsideItem/AsideItem'
import cn from 'classnames'
import {useAppSelector} from '../../../utils/Hooks/useAppSelector';
import {getThemeStyle} from '../../../Redux/selectors/styleSelector';


type PropsType = {
  asideItems: Array<any>
}

const Aside: React.FC<PropsType> = ({asideItems}) => {


  const themeStyle = useAppSelector(getThemeStyle)

  return (
    <aside className={cn(s.aside, s[themeStyle ? themeStyle : ''])}>
      <nav className={s.sidebar}>
        <ul>
          {asideItems.map((el, index) =>
            <AsideItem key={index} itemTitle={el.itemTitle} itemLink={el.itemLink}
                       topics={el.topics ? el.topics : undefined} themeStyle={themeStyle}/>
          )}
        </ul>
      </nav>
    </aside>
  )
}
export default Aside
