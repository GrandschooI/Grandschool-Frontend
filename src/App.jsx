import React, {useEffect} from 'react'
import {VerticleButton as ScrollUpButton} from 'react-scroll-up-button'
import HeaderContainer from './components/Header/HeaderContainer'
import FooterContainer from './components/Footer/FooterContainer'
import {Route, Switch} from "react-router-dom";
import AppBodyContainer from "./components/AppBody/AppBodyContainer";

/*import Preloader from './components/utils/Preloader'*/

const App = ({setUserFromLocalStorage}) => {
  useEffect(() => {
      setUserFromLocalStorage()
  }, [])
    return (
        <div className='App'>
            {/*<Preloader isLoaded={isLoaded}/>*/}
            <Switch>
                <Route path='/' render={() => <section>
                    <HeaderContainer/>
                    <AppBodyContainer/>
                    <FooterContainer/>
                    <ScrollUpButton/>
                </section>}/>
            </Switch>
        </div>
    );
}

export default App
