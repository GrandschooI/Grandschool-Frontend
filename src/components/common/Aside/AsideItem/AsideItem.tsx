import React, {useEffect, useState} from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import cn from 'classnames'
import s from './AsideItem.module.scss'
import {topicType} from '../../../../Redux/reducers/courseReducer'
import {Nullable} from '../../../../Redux/redux-store'
import {CSSTransition} from 'react-transition-group'

const AsideItem: React.FC<PropsType> = ({itemTitle, itemLink, topics, themeStyle}) => {
    const location: string = useLocation().pathname
    const [activeItem, setActiveItem] = useState(false)
    useEffect(() => {
        if (location === itemLink) {
            setActiveItem(true)
        }
    }, [location, itemLink])
    return (
        <li className={s[themeStyle ? themeStyle : '']}>
            {!topics ?
                <NavLink to={itemLink} className={cn(s.asideLink, location === itemLink ? s.activeItem : '')}>
                    <span>{itemTitle}</span>
                </NavLink> :
                <>
                    <span
                        className={cn(s.asideLink,
                            activeItem ? [s.activeItem, s.upArrow] : '',
                            location === itemLink ? s.rightArrow : '')}
                        onClick={() => setActiveItem(!activeItem)}>{itemTitle}</span>
                    <CSSTransition
                        in={activeItem}
                        timeout={2000}
                        classNames={{
                            enter: s.optionEnter,
                            enterActive: s.optionEnterActive,
                            exit: s.optionExitActive
                        }}
                        appear
                        unmountOnExit
                    >
                        <ul className={s.asideSubmenu}>
                            {topics.map((el, index) => <li key={index}>
                                <NavLink to={el.topicLink}>
                                    {el.topicTitle}
                                </NavLink>
                            </li>)}
                        </ul>
                    </CSSTransition>
                </>
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