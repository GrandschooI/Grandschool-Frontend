import {connect} from 'react-redux'
import {
  getFontSize,
  getThemeStyle,
  getImgAvailability,
  getStyleMode,
  getOptionsState
} from '../../../Redux/selectors/styleSelector'
import {styleActions} from '../../../Redux/reducers/styleReducer'
import {AppStateType, Nullable} from '../../../Redux/redux-store'
import BlindModeOptions from './BlindModeOptions'

type mapStatePropsType = {
    blindMode: boolean
    fontSize: string
    themeStyle: Nullable<string>
    images: boolean
    isOptionsOpen: boolean
    fontSizeFromLocalStorage: Nullable<string>
    themeStyleFromLocalStorage: Nullable<string>
    imagesFromLocalStorage: Nullable<string>
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
  return {
    blindMode: getStyleMode(state),
    fontSize: getFontSize(state),
    themeStyle: getThemeStyle(state),
    images: getImgAvailability(state),
    isOptionsOpen: getOptionsState(state),
    fontSizeFromLocalStorage: window.localStorage.getItem('fontSizeFromLocalStorage'),
    themeStyleFromLocalStorage: window.localStorage.getItem('themeStyleFromLocalStorage'),
    imagesFromLocalStorage: window.localStorage.getItem('imagesFromLocalStorage')
  }
}

export default connect(mapStateToProps, {
  setFontSizeModeAC: styleActions.setFontSizeModeAC,
  setThemeStyleModeAC: styleActions.setThemeStyleModeAC,
  setImgAvailabilityAC: styleActions.setImgAvailabilityAC,
  setOptionsModeAC: styleActions.setOptionsModeAC
})(BlindModeOptions)