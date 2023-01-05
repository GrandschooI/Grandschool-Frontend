import {connect} from 'react-redux'
import ProfileInfoForm from "./ProfileInfoForm";
import {appStateType, Nullable} from "../../../../../../Redux/redux-store";
import {
    getAboutUserText,
    getUserBirthData, getUserCity,
    getUserCountry,
    getUserName,
    getUserSex
} from "../../../../../../Redux/selectors/userSelector";
import {userActions} from "../../../../../../Redux/reducers/userReducer";

const setProfileInfo = userActions.setProfileInfo

type mapStatePropsType = {
    name: Nullable<string>
    sex: Nullable<string>
    birthData: Nullable<Date>
    country: Nullable<string>
    city: Nullable<string>
    aboutUserText: Nullable<string>
}

const mapStateToProps = (state: appStateType): mapStatePropsType => ({
    name: getUserName(state),
    sex: getUserSex(state),
    birthData: getUserBirthData(state),
    country: getUserCountry(state),
    city: getUserCity(state),
    aboutUserText: getAboutUserText(state)
})

export default connect(mapStateToProps, {setProfileInfo})(ProfileInfoForm)
