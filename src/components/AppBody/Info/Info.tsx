import React, {useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import cn from 'classnames'
import s from './Info.module.scss'
import AsideContainer from "../../common/Aside/AsideContainer"
import {Nullable} from "../../../Redux/redux-store"
import WebsitesContainer from "./InfoContent/Websites/WebsitesContainer";

const Info: React.FC<PropsType> = ({themeStyle, infoItems, getWebsitesCategoryThunkCreator}) => {
    useEffect(() => {
        getWebsitesCategoryThunkCreator()
    }, [])
    return (
        <div className={cn('container', s.infoWrapper)}>
            <h1>Info</h1>
            <div className={s.infoContentWrap}>
                <AsideContainer themeStyle={themeStyle} asideItems={infoItems}/>
                <Switch>
                    <Route path="/info/websites" render={() => <WebsitesContainer/>}/>
                </Switch>
            </div>
        </div>
    )
}

export default Info

type PropsType = {
    infoItems: any
    themeStyle: Nullable<string>
    getWebsitesCategoryThunkCreator: () => void
}