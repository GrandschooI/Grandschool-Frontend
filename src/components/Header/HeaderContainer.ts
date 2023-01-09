import {connect} from 'react-redux'
import {getFontSize, getImgAvailability, getOptionsState, getStyleMode, getThemeStyle} from '../../Redux/selectors/styleSelector'
import {getAuthStatus} from '../../Redux/selectors/userSelector'
import {styleActions} from '../../Redux/reducers/styleReducer'
import {AppStateType, Nullable} from '../../Redux/redux-store'
import {logoutThunkCreator} from '../../Redux/reducers/userReducer'
import Header from './Header'

type mapStatePropsType = {
    blindMode: boolean
    fontSize: string
    themeStyle: Nullable<string>
    images: boolean
    isLoaded?: boolean
    isOptionsOpen: boolean
    isAuth: boolean
    blindModeFromLocalStorage: Nullable<string>
    routesWithDefaultHeader: Array<string>
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
  return {
    blindMode: getStyleMode(state),
    themeStyle: getThemeStyle(state),
    images: getImgAvailability(state),
    fontSize: getFontSize(state),
    isOptionsOpen: getOptionsState(state),
    isAuth: getAuthStatus(state),
    blindModeFromLocalStorage: window.localStorage.getItem('blindModeFromLocalStorage'),
    routesWithDefaultHeader: ['/', '/login', '/registration', '/confirm-registration', '/not-found']
  }
}
//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
export default connect(mapStateToProps,
  {switchBlindModeAC: styleActions.switchBlindModeAC, setOptionsModeAC: styleActions.setOptionsModeAC, logoutThunkCreator})(Header)