import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { VerticleButton as ScrollUpButton } from 'react-scroll-up-button'

import AppBody from './components/AppBody/AppBody'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Preloader from './components/utils/Preloader/Preloader'
import { setUserFromLocalStorage } from './Redux/reducers/userSlice'
import { getLoadedInfo } from './Redux/selectors/styleSelector'
import { useAppSelector } from './utils/Hooks/useAppSelector'

const App = () => {
  const dispatch = useDispatch()
  const isLoaded = useAppSelector(getLoadedInfo)

  useEffect(() => {
    dispatch(setUserFromLocalStorage())
  }, [dispatch])

  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <section>
            <Header />
            <AppBody />
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
