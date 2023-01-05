import {connect} from 'react-redux'
import AuthPage from './AuthPage'
import {appStateType, Nullable} from '../../../Redux/redux-store'
import {getAuthStatus} from '../../../Redux/selectors/userSelector'
import {
    getFontSize,
    getImgAvailability,
    getOptionsState,
    getStyleMode,
    getThemeStyle
} from '../../../Redux/selectors/styleSelector'
import {
    FACEBOOK_CLIENT_ID, forgotPasswordThunkCreator,
    GOOGLE_CLIENT_ID,
    loginThunkCreator,
    registerThunkCreator
} from '../../../Redux/reducers/userReducer'

type mapStatePropsType = {
    isAuth: boolean
    blindMode: boolean
    themeStyle: Nullable<string>
    isOptionsOpen: boolean
    images: boolean,
    fontSize: Nullable<string>,
    GOOGLE_CLIENT_ID: string,
    FACEBOOK_CLIENT_ID: string
}

const mapStateToProps = (state: appStateType): mapStatePropsType => ({
    isAuth: getAuthStatus(state),
    themeStyle: getThemeStyle(state),
    blindMode: getStyleMode(state),
    isOptionsOpen: getOptionsState(state),
    images: getImgAvailability(state),
    fontSize: getFontSize(state),
    GOOGLE_CLIENT_ID: GOOGLE_CLIENT_ID,
    FACEBOOK_CLIENT_ID: FACEBOOK_CLIENT_ID
})

export default connect(mapStateToProps, {registerThunkCreator, loginThunkCreator, forgotPasswordThunkCreator})(AuthPage)