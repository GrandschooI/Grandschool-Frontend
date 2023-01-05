import {connect} from 'react-redux'
import App from './App'
import {getStyleMode, getLoadedInfo} from './Redux/selectors/styleSelector'
import {appStateType} from './Redux/redux-store'
import {setUserFromLocalStorage} from "./Redux/reducers/userReducer";

const mapStateToProps = (state: appStateType) => ({
    blindMode: getStyleMode(state),
    isLoaded: getLoadedInfo(state)
})

export default connect(mapStateToProps, {setUserFromLocalStorage})(App)

