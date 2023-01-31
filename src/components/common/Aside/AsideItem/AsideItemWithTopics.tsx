import React from 'react'
import cn from "classnames";
import s from "./AsideItem.module.scss";
import {CSSTransition} from "react-transition-group";
import {NavLink} from "react-router-dom";
import {topicType} from "../../../../Redux/reducers/courseReducer";

const AsideItemWithTopics: React.FC<PropsType> = ({activeItem, location, itemLink, setActiveItem, itemTitle, topics}) => {
    return (
        <>
            <span className={cn(s.asideLink, activeItem ? [s.activeItem, s.upArrow] : '',
                location.includes(itemLink) ? s.rightArrow : '')}
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
                    {topics.map((el, index: number) => <li key={index}
                                                   className={location === el.topicLink ? s.activeTopic : ''}>
                        <NavLink to={el.topicLink}>
                            {el.topicTitle}
                        </NavLink>
                    </li>)}
                </ul>
            </CSSTransition>
        </>
    )
}

export default AsideItemWithTopics

type PropsType = {
    activeItem: boolean
    location: string
    itemLink: string
    setActiveItem: (activeItem: boolean) => void
    itemTitle: string
    topics: Array<topicType>
}