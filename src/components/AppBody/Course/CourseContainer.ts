import {connect} from 'react-redux'
import {getCourseData} from '../../../Redux/selectors/courseSelector'
import {registerThunkCreator} from '../../../Redux/reducers/userReducer'
import {AppStateType} from '../../../Redux/redux-store'
import Course from './Course'
import {courseType} from '../../../Redux/reducers/courseReducer';

type mapStatePropsType = {
    courseData: Array<courseType>
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => ({
    courseData: getCourseData(state)
})

export default connect(mapStateToProps, {registerThunkCreator})(Course)
