import {connect} from 'react-redux'
import {appStateType, Nullable} from '../../../Redux/redux-store'
import {getFontSize, getThemeStyle} from '../../../Redux/selectors/styleSelector'
import NotFound from './NotFound'

export type mapStatePropsType = {
    themeStyle: Nullable<string>
    fontSize: string
}

const mapStateToProps = (state: appStateType): mapStatePropsType => ({
    themeStyle: getThemeStyle(state),
    fontSize: getFontSize(state)
})

export default connect(mapStateToProps, {})(NotFound)