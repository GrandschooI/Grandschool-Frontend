import {connect} from 'react-redux'
import AppBody from "./AppBody";
import {AppStateType} from "../../Redux/redux-store";
import {getOptionsState} from "../../Redux/selectors/styleSelector";

export type propsType = {
    isOptionsOpen: boolean
}

const mapStateToProps = (state: AppStateType): propsType => {
    return {
        isOptionsOpen: getOptionsState(state)
    }
}

export default connect(mapStateToProps, {})(AppBody)