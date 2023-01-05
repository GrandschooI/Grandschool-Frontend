import React from 'react'
import s from './Aside.module.scss'
import AsideItem from './AsideItem/AsideItem'
import {AsideItemsType} from './AsideContainer'
import {Nullable} from '../../../Redux/redux-store'
import cn from 'classnames'

const Aside: React.FC<propsType> = ({asideItems, themeStyle}) => {
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

type propsType = {
    asideItems: AsideItemsType
    themeStyle: Nullable<string>
}
