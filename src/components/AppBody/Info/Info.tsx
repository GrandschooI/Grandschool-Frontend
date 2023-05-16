import React, { useEffect } from 'react'

import cn from 'classnames'
import { useDispatch } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'

import { topicType } from '../../../Redux/reducers/courseSlice'
import { getWebsitesCategoryThunkCreator } from '../../../Redux/reducers/infoSlice'
import { getInfoMenu } from '../../../Redux/selectors/infoSelector'
import { getFontSize, getThemeStyle } from '../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../utils/Hooks/useAppSelector'
import { activeFontSize, activeThemeStyle } from '../../../utils/scaffolding'
import Aside from '../../common/Aside/Aside'

import s from './Info.module.scss'
import Websites from './InfoContent/Websites/Websites'

const Info = () => {
  const dispatch = useDispatch()
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)
  const infoAsideItems = useAppSelector(getInfoMenu)
  let defaultLinkForRedirect = null

  useEffect(() => {
    dispatch(getWebsitesCategoryThunkCreator())
  }, [])

  if (infoAsideItems[0].topics.length)
    defaultLinkForRedirect = infoAsideItems[0].topics[0].topicLink

  return (
    <div
      className={cn(
        'container',
        s.infoWrapper,
        s[activeThemeStyle(themeStyle)],
        s[activeFontSize(fontSize)]
      )}
    >
      <h1>Info</h1>
      <div className={s.infoContentWrap}>
        <Aside asideItems={infoAsideItems} />
        <Switch>
          <Route path="/info/websites" render={() => <Websites />} />
          {defaultLinkForRedirect && <Redirect path="/info" to={defaultLinkForRedirect} />}
        </Switch>
      </div>
    </div>
  )
}

export default Info
