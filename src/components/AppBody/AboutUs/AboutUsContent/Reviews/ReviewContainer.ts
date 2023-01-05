import {connect} from 'react-redux'
import {appStateType, Nullable} from '../../../../../Redux/redux-store'
import {
    getFontSize,
    getImgAvailability, getOptionsState,
    getStyleMode,
    getThemeStyle
} from '../../../../../Redux/selectors/styleSelector'
import Review from './Review'

type mapStatePropsType = {
    blindMode: boolean
    themeStyle: Nullable<string>
    images: boolean
    fontSize: Nullable<string>
    isOptionsOpen: boolean
}

const mapStateToProps = (state: appStateType): mapStatePropsType => ({
    blindMode: getStyleMode(state),
    themeStyle: getThemeStyle(state),
    images: getImgAvailability(state),
    fontSize: getFontSize(state),
    isOptionsOpen: getOptionsState(state)
})

export default connect(mapStateToProps, {})(Review)