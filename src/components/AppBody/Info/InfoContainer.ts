import {connect} from 'react-redux'
import Info from './Info'
import {getWebsitesCategoryThunkCreator} from '../../../Redux/reducers/infoReducer'
import {getInfoMenu} from "../../../Redux/selectors/infoSelector"
import {AppStateType, Nullable} from "../../../Redux/redux-store"
import {getThemeStyle} from "../../../Redux/selectors/styleSelector"

const mapStateToProps = (state: AppStateType): propsType => ({
    infoItems: getInfoMenu(state),
    themeStyle: getThemeStyle(state)
})

export default connect(mapStateToProps, {getWebsitesCategoryThunkCreator})(Info)

export type propsType = {
    infoItems: any
    themeStyle: Nullable<string>
}