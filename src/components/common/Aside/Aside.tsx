import React from 'react'
import s from './Aside.module.scss'
import AsideItem from './AsideItem/AsideItem'
import cn from 'classnames'
import {useAppSelector} from '../../../utils/Hooks/useAppSelector';
import {getFontSize, getThemeStyle} from "../../../Redux/selectors/styleSelector";

type PropsType = {
    asideItems: Array<any>
}

const Aside: React.FC<PropsType> = ({asideItems}) => {
    const themeStyle = useAppSelector(getThemeStyle)
    const fontSize = useAppSelector(getFontSize)
    const aside =cn(s.aside, s[themeStyle ? themeStyle : ''])

    return (
        <aside className={aside}>
            <nav className={s.sidebar}>
                <ul>
                    {asideItems.map((el, index) =>
                        <AsideItem key={index} itemTitle={el.itemTitle} itemLink={el.itemLink}
                                   topics={el.topics ? el.topics : undefined} themeStyle={themeStyle} fontSize={fontSize}/>
                    )}
                </ul>
            </nav>
        </aside>
    )
}
export default Aside
