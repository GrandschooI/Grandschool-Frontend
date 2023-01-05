import {connect} from 'react-redux'
import {appStateType, Nullable} from "../../../../../../Redux/redux-store";
import ProfileImageForm from "./ProfileImageForm";
import {getUserPhotoLink} from "../../../../../../Redux/selectors/userSelector";
import {setUserPhotoThunkCreator} from "../../../../../../Redux/reducers/userReducer";

type mapStatePropsType = {
    userPhotoLink: Nullable<string>
}

const mapStateToProps = (state: appStateType): mapStatePropsType => ({
    userPhotoLink: getUserPhotoLink(state)
})

export default connect(mapStateToProps, {setUserPhotoThunkCreator})(ProfileImageForm)