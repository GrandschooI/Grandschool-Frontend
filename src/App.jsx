import React, {useEffect} from 'react'
import {VerticleButton as ScrollUpButton} from 'react-scroll-up-button'
import HeaderContainer from './components/Header/HeaderContainer'
import FooterContainer from './components/Footer/FooterContainer'
import {Route, Switch} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useAppSelector} from './utils/Hooks/useAppSelector';
import {getLoadedInfo} from './Redux/selectors/styleSelector';
import {setUserFromLocalStorage} from './Redux/reducers/userReducer';
import Preloader from './components/utils/Preloader/Preloader';
import AppBody from './components/AppBody/AppBody';


const App = () => {
    const dispatch = useDispatch()
    const isLoaded = useAppSelector(getLoadedInfo)
    //const blindMode = useAppSelector(getStyleMode)

    useEffect(() => {
        dispatch(setUserFromLocalStorage())
    }, [])

    if (!isLoaded) return <Preloader/>
    return (
        <div className="App">
            <Switch>
                <Route path="/" render={() => <section>
                    <HeaderContainer/>
                    <AppBody/>
                    <FooterContainer/>
                    <ScrollUpButton/>
                </section>}/>
            </Switch>
        </div>
    );
}

export default App
