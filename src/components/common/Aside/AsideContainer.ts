import {connect} from 'react-redux'
import {AppStateType, Nullable} from '../../../Redux/redux-store'
import Aside from './Aside'
import {topicType} from '../../../Redux/reducers/courseReducer'
import {getThemeStyle} from '../../../Redux/selectors/styleSelector'

export type AsideItemsType = Array<AsideItemType>
export type AsideItemType = { itemTitle: string, itemLink: string, topics?: Array<topicType> }

type mapStatePropsType = {
    asideItems: AsideItemsType
    themeStyle: Nullable<string>
}

const mapStateToProps = (state: AppStateType, props: any): mapStatePropsType => ({
    asideItems: props.asideItems,
    themeStyle: getThemeStyle(state)
})

export default connect(mapStateToProps, {})(Aside)