import {connect} from 'react-redux'
import {
  getFontSize,
  getImgAvailability,
  getOptionsState,
  getStyleMode,
  getThemeStyle
} from '../../../Redux/selectors/styleSelector'
import {AppStateType, Nullable} from '../../../Redux/redux-store'
import HomePage from './HomePage'

export type propsType = {
  blindMode: boolean
  themeStyle: Nullable<string>
  images: boolean
  fontSize: Nullable<string>
  isOptionsOpen: boolean
}

const mapStateToProps = (state: AppStateType): propsType => {
  return {
    blindMode: getStyleMode(state),
    themeStyle: getThemeStyle(state),
    images: getImgAvailability(state),
    fontSize: getFontSize(state),
    isOptionsOpen: getOptionsState(state)
  }
}

export default connect(mapStateToProps, {})(HomePage)