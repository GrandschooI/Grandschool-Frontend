import React, {useEffect} from 'react'
import {VerticleButton as ScrollUpButton} from 'react-scroll-up-button'
import {Route, Switch} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useAppSelector} from './utils/Hooks/useAppSelector';
import {getLoadedInfo} from './Redux/selectors/styleSelector';
import {setUserFromLocalStorage} from './Redux/reducers/userReducer';
import Preloader from './components/utils/Preloader/Preloader';
import AppBody from './components/AppBody/AppBody';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


const App = () => {
    const dispatch = useDispatch()
    const isLoaded = useAppSelector(getLoadedInfo)

    useEffect(() => {
        dispatch(setUserFromLocalStorage())
    }, [])

    return (
        <div className="App">
            <Switch>
                <Route path="/" render={() => <section>
                    <Header />
                    <AppBody/>
                    <Footer/>
                    <ScrollUpButton/>
                </section>}/>
            </Switch>
            {!isLoaded && <Preloader/>}
        </div>
    );
}

export default App
