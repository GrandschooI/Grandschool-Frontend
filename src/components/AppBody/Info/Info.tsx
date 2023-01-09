import React, {useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import cn from 'classnames'
import s from './Info.module.scss'
import WebsitesContainer from './InfoContent/Websites/WebsitesContainer';
import Aside from '../../common/Aside/Aside';
import {useDispatch} from 'react-redux';
import {getWebsitesCategoryThunkCreator} from '../../../Redux/reducers/infoReducer';

const Info= () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getWebsitesCategoryThunkCreator())
    }, [])
    return (
        <div className={cn('container', s.infoWrapper)}>
            <h1>Info</h1>
            <div className={s.infoContentWrap}>
                <Aside/>
                <Switch>
                    <Route path="/info/websites" render={() => <WebsitesContainer/>}/>
                </Switch>
            </div>
        </div>
    )
}

export default Info
