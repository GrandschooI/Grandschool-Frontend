import {connect} from 'react-redux'
import {AppStateType, Nullable} from '../../../Redux/redux-store'
import {
    getFontSize,
    getImgAvailability,
    getStyleMode,
    getThemeStyle
} from '../../../Redux/selectors/styleSelector'
import {styleActions} from '../../../Redux/reducers/styleReducer'
import BlindButton from './BlindButton'

type mapStatePropsType = {
    blindMode: boolean
    themeStyle: Nullable<string>
    images: boolean
    fontSize: Nullable<string>
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        blindMode: getStyleMode(state),
        themeStyle: getThemeStyle(state),
        images: getImgAvailability(state),
        fontSize: getFontSize(state)
    }
}

export default connect(mapStateToProps, {switchBlindModeAC: styleActions.switchBlindModeAC})(BlindButton)