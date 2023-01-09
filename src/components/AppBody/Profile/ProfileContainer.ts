import {connect} from 'react-redux'
import {AppStateType, Nullable} from '../../../Redux/redux-store'
import Profile from './Profile';
import {getUserAsideItems} from '../../../Redux/selectors/userSelector';
import {
    getFontSize,
    getImgAvailability,
    getOptionsState,
    getStyleMode,
    getThemeStyle
} from '../../../Redux/selectors/styleSelector'
import {getAuthStatus} from '../../../Redux/selectors/userSelector'
import {logoutThunkCreator} from "../../../Redux/reducers/userReducer";

export type AsideItemsType = Array<AsideItemType>
export type AsideItemType = { itemTitle: string, itemLink: string }

type mapStatePropsType = {
    asideItems: AsideItemsType
    blindMode: boolean
    themeStyle: Nullable<string>
    images: boolean
    fontSize: Nullable<string>
    isOptionsOpen: boolean
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => ({
        asideItems: getUserAsideItems(state),
        blindMode: getStyleMode(state),
        themeStyle: getThemeStyle(state),
        images: getImgAvailability(state),
        fontSize: getFontSize(state),
        isOptionsOpen: getOptionsState(state),
        isAuth: getAuthStatus(state)
    }
)

export default connect(mapStateToProps, {logoutThunkCreator})(Profile)