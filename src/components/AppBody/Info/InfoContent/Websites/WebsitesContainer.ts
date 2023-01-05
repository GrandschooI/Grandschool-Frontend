import {connect} from 'react-redux'
import {getWebsites} from '../../../../../Redux/selectors/infoSelector'
import {appStateType} from '../../../../../Redux/redux-store'
import Websites from './Websites'
import { getWebsitesThunkCreator } from '../../../../../Redux/reducers/infoReducer'

const mapStateToProps = (state: appStateType) => ({
        websitesData: getWebsites(state)
    }
)

export default connect(mapStateToProps, {getWebsitesThunkCreator})(Websites)

type mapStateToPropsType = {
    websitesData: Array<any>
}