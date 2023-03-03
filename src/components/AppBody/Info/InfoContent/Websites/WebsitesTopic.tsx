import React from 'react'
import s from './Websites.module.scss'
import {useAppSelector} from "../../../../../utils/Hooks/useAppSelector";
import {getFontSize, getThemeStyle} from "../../../../../Redux/selectors/styleSelector";
import cn from "classnames";

type propsType = {
    websitesData: any
}

const WebsitesTopic: React.FC<propsType> = ({websitesData}) => {
    const themeStyle = useAppSelector(getThemeStyle)
    const fontSize = useAppSelector(getFontSize)
    const fill = themeStyle === 'yellowTheme' ? 'yellow'
        : themeStyle === 'whiteTheme' ? '#000'
            : themeStyle === 'blueTheme' ? '#273a64'
                : '#83A358'
    return (
        <>
            {/*{websitesData.category && <h2 className={s.websiteTopicName}>{websitesData.category}</h2>}*/}
            <li className={cn(s.websitesItem, s[themeStyle ? themeStyle : ''], s[fontSize ? fontSize : ''])}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.5 2.0835C6.75004 2.0835 2.08337 6.75016 2.08337 12.5002C2.08337 18.2502 6.75004 22.9168 12.5 22.9168C18.25 22.9168 22.9167 18.2502 22.9167 12.5002C22.9167 6.75016 18.25 2.0835 12.5 2.0835ZM13.5417 19.7918H11.4584V17.7085H13.5417V19.7918ZM15.698 11.7189L14.7605 12.6772C14.0105 13.4377 13.5417 14.0627 13.5417 15.6252H11.4584V15.1043C11.4584 13.9585 11.9271 12.9168 12.6771 12.1564L13.9688 10.8439C14.3542 10.4689 14.5834 9.94808 14.5834 9.37516C14.5834 8.22933 13.6459 7.29183 12.5 7.29183C11.3542 7.29183 10.4167 8.22933 10.4167 9.37516H8.33337C8.33337 7.07308 10.198 5.2085 12.5 5.2085C14.8021 5.2085 16.6667 7.07308 16.6667 9.37516C16.6667 10.2918 16.2917 11.1252 15.698 11.7189Z"
                        fill={fill}/>
                </svg>

                <a href={websitesData.itemLink} target='_blank' rel="noreferrer">{websitesData.itemTitle}</a> {/*<span>{el.description}</span>*/}
            </li>
        </>
    )
}

export default WebsitesTopic