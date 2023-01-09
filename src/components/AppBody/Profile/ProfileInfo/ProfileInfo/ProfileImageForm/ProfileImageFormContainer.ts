import {connect} from 'react-redux'
import {AppStateType, Nullable} from "../../../../../../Redux/redux-store";
import ProfileImageForm from "./ProfileImageForm";
import {getUserPhotoLink} from "../../../../../../Redux/selectors/userSelector";
import {setUserPhotoThunkCreator} from "../../../../../../Redux/reducers/userReducer";

type mapStatePropsType = {
    userPhotoLink: Nullable<string>
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => ({
    userPhotoLink: getUserPhotoLink(state)
})

export default connect(mapStateToProps, {setUserPhotoThunkCreator})(ProfileImageForm)