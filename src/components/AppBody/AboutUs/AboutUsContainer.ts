import {connect} from 'react-redux'
import {appStateType, Nullable} from '../../../Redux/redux-store'
import {getInfoAboutUs} from '../../../Redux/selectors/infoSelector'
import AboutUs from './AboutUs'
import {
    getFontSize,
    getImgAvailability,
    getOptionsState,
    getStyleMode,
    getThemeStyle
} from '../../../Redux/selectors/styleSelector'

type mapStatePropsType = {
    asideItems: any
    blindMode: boolean
    themeStyle: Nullable<string>
    images: boolean
    fontSize: Nullable<string>
    isOptionsOpen: boolean
}

const mapStateToProps = (state: appStateType): mapStatePropsType => ({
    asideItems: getInfoAboutUs(state),
    blindMode: getStyleMode(state),
    themeStyle: getThemeStyle(state),
    images: getImgAvailability(state),
    fontSize: getFontSize(state),
    isOptionsOpen: getOptionsState(state)
})

export default connect(mapStateToProps, {})(AboutUs)