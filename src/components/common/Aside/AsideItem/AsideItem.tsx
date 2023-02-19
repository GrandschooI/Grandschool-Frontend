import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import s from './AsideItem.module.scss'
import {Nullable} from '../../../../Redux/redux-store'
import AsideItemWithoutTopics from "./AsideItemWithoutTopics";
import AsideItemWithTopics from "./AsideItemWithTopics";
import {topicType} from "../../../../Redux/reducers/courseSlice";

const AsideItem: React.FC<PropsType> = ({itemTitle, itemLink, topics, themeStyle}) => {
    const location: string = useLocation().pathname
    const [activeItem, setActiveItem] = useState(false)
    useEffect(() => {
        if (location.includes(itemLink)) {
            setActiveItem(true)
        }
    }, [location, itemLink])
    return (
        <li className={s[themeStyle ? themeStyle : '']}>
            {!topics ?
                <AsideItemWithoutTopics itemTitle={itemTitle} itemLink={itemLink} location={location}/> :
                <AsideItemWithTopics activeItem={activeItem} itemTitle={itemTitle} location={location}
                                     itemLink={itemLink} setActiveItem={setActiveItem} topics={topics} />
            }
        </li>
    )
}

export default AsideItem

type PropsType = {
    itemTitle: string
    itemLink: string
    topics?: Array<topicType>
    themeStyle: Nullable<string>
}