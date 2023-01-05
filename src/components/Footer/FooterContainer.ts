import {connect} from 'react-redux'
import {getFontSize, getImgAvailability, getStyleMode, getThemeStyle} from '../../Redux/selectors/styleSelector'
import {appStateType, Nullable} from '../../Redux/redux-store'
import Footer from './Footer'

type mapStatePropsType = {
    themeStyle: Nullable<string>
    images: boolean
    blindMode: boolean
    fontSize: string
}

const mapStateToProps = (state: appStateType): mapStatePropsType => {
  return {
    blindMode: getStyleMode(state),
    themeStyle: getThemeStyle(state),
    images: getImgAvailability(state),
    fontSize: getFontSize(state)
  }
}

export default connect(mapStateToProps, {})(Footer)