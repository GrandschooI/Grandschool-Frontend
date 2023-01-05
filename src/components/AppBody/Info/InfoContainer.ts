import {connect} from 'react-redux'
import Info from './Info'
import {getWebsitesCategoryThunkCreator} from '../../../Redux/reducers/infoReducer'
import {getInfoMenu} from "../../../Redux/selectors/infoSelector"
import {appStateType, Nullable} from "../../../Redux/redux-store"
import {getThemeStyle} from "../../../Redux/selectors/styleSelector"

const mapStateToProps = (state: appStateType): propsType => ({
    infoItems: getInfoMenu(state),
    themeStyle: getThemeStyle(state)
})

export default connect(mapStateToProps, {getWebsitesCategoryThunkCreator})(Info)

export type propsType = {
    infoItems: any
    themeStyle: Nullable<string>
}