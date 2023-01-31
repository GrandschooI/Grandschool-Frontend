import React from 'react'
import cn from "classnames";
import s from "./AsideItem.module.scss";
import {NavLink} from "react-router-dom";

const AsideItemWithoutTopics:React.FC<PropsType> = ({location, itemLink, itemTitle}) => {
    return (
        <NavLink to={itemLink} className={cn(s.asideLink, location === itemLink ? s.activeItem : '')}>
            <span>{itemTitle}</span>
        </NavLink>
    )
}

export default AsideItemWithoutTopics

type PropsType = {
    location: string
    itemLink: string
    itemTitle: string
}