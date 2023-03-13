import React, {useEffect} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import cn from 'classnames'
import s from './Info.module.scss'
import Aside from '../../common/Aside/Aside';
import {useDispatch} from 'react-redux';
import {getWebsitesCategoryThunkCreator} from '../../../Redux/reducers/infoSlice'
import Websites from './InfoContent/Websites/Websites';
import {useAppSelector} from '../../../utils/Hooks/useAppSelector';
import {getInfoMenu} from '../../../Redux/selectors/infoSelector';
import {getFontSize, getThemeStyle} from "../../../Redux/selectors/styleSelector";

const Info = () => {
  const dispatch = useDispatch()
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)
  const infoAsideItems:asideItemsType = useAppSelector(getInfoMenu)
  let defaultLinkForRedirect = null
  useEffect(() => {
    dispatch(getWebsitesCategoryThunkCreator())
  }, [])

  if (infoAsideItems[0].topics.length) defaultLinkForRedirect = infoAsideItems[0].topics[0].topicLink

  return (
    <div className={cn('container', s.infoWrapper, s[themeStyle ? themeStyle : ''], s[fontSize ? fontSize : ''])}>
      <h1>Info</h1>
      <div className={s.infoContentWrap}>
        <Aside asideItems={infoAsideItems}/>
        <Switch>
          <Route path="/info/websites" render={() => <Websites/>}/>
          {defaultLinkForRedirect && <Redirect path="/info" to={defaultLinkForRedirect}/>}
        </Switch>
      </div>
    </div>
  )
}

export default Info

type asideItemsType = Array<any>
