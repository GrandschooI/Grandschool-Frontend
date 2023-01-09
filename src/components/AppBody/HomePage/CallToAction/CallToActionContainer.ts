import {connect} from 'react-redux'
import {AppStateType, Nullable} from '../../../../Redux/redux-store'
import {
  getFontSize,
  getImgAvailability,
  getOptionsState,
  getStyleMode,
  getThemeStyle
} from '../../../../Redux/selectors/styleSelector'
import {getAuthStatus} from '../../../../Redux/selectors/userSelector'
import CallToAction from './CallToAction'

type mapStatePropsType = {
    blindMode: boolean
    fontSize: string
    themeStyle: Nullable<string>
    images: boolean
    isLoaded?: boolean
    isOptionsOpen: boolean
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
  return {
    blindMode: getStyleMode(state),
    themeStyle: getThemeStyle(state),
    images: getImgAvailability(state),
    fontSize: getFontSize(state),
    isOptionsOpen: getOptionsState(state),
    isAuth: getAuthStatus(state)
  }
}

export default connect(mapStateToProps, {})(CallToAction)