import React, { useEffect } from 'react'

import cn from 'classnames'
import { useDispatch } from 'react-redux'
import { Route, Switch, useLocation } from 'react-router-dom'
import { VerticleButton as ScrollUpButton } from 'react-scroll-up-button'

import AppBody from './components/AppBody/AppBody'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Preloader from './components/utils/Preloader/Preloader'
import { setUserFromLocalStorage } from './Redux/reducers/userSlice'
import { getLoadedInfo, getStyleMode } from './Redux/selectors/styleSelector'
import { useAppSelector } from './utils/Hooks/useAppSelector'

const App = () => {
  const dispatch = useDispatch()
  const isLoaded = useAppSelector(getLoadedInfo)
  const blindMode = useAppSelector(getStyleMode)

  const routesWithDefaultHeader = [
    '/',
    '/login',
    '/registration',
    '/confirm-registration',
    '/not-found',
  ]
  const location = useLocation().pathname
  const isHeaderChange = routesWithDefaultHeader.some(element => element === location)

  useEffect(() => {
    dispatch(setUserFromLocalStorage())
  }, [dispatch])

  return (
    <div className={cn('App', blindMode ? 'activeBlindMode' : '')}>
      <Switch>
        <Route path="/">
          <section>
            <Header isHeaderChange={isHeaderChange} />
            <AppBody isHeaderChange={isHeaderChange} />
            <Footer />
            <ScrollUpButton />
          </section>
        </Route>
      </Switch>
      {!isLoaded && <Preloader />}
    </div>
  )
}

export default App
