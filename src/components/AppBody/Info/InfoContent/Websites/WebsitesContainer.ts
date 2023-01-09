import {connect} from 'react-redux'
import {getWebsites} from '../../../../../Redux/selectors/infoSelector'
import {AppStateType} from '../../../../../Redux/redux-store'
import Websites from './Websites'
import { getWebsitesThunkCreator } from '../../../../../Redux/reducers/infoReducer'

const mapStateToProps = (state: AppStateType) => ({
        websitesData: getWebsites(state)
    }
)

export default connect(mapStateToProps, {getWebsitesThunkCreator})(Websites)

type mapStateToPropsType = {
    websitesData: Array<any>
}