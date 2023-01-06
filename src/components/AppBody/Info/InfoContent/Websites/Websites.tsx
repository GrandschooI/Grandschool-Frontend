import React, {useEffect} from 'react'
import s from './Websites.module.scss'
import WebsitesTopic from "./WebsitesTopic";
import {useLocation} from "react-router-dom";

const Websites: React.FC<propsType> = ({websitesData, getWebsitesThunkCreator}) => {
    let location: string = useLocation().pathname
    useEffect(() => {
        getWebsitesThunkCreator('rozrywka-w-sieci-dla-seniorow-internetowe-biblioteki-multimedialne')
    }, [])
    return (
        <>
            <ul className={s.websitesList}>
                {websitesData.map((el: any) => <WebsitesTopic websitesData={el} key={el.id}/>)}
            </ul>
        </>
    )
}

export default Websites

type propsType = {
    websitesData: any,
    getWebsitesThunkCreator: any
}