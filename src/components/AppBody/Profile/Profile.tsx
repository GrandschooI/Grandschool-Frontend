import React, {useState} from 'react'
import s from './Profile.module.scss'
import {Redirect, Route, Switch} from 'react-router-dom';
import ProfileInfo from './ProfileInfo/ProfileInfo/ProfileInfo';
import cn from 'classnames';
import AccountSettings from './AccountSettings/AccountSettings'
import Popup from '../../common/Popup/Popup';
import {CSSTransition} from 'react-transition-group'
import Aside from '../../common/Aside/Aside';
import {useAppSelector} from '../../../utils/Hooks/useAppSelector';
import {getFontSize, getThemeStyle} from '../../../Redux/selectors/styleSelector';
import {useDispatch} from 'react-redux';
import {logoutThunkCreator} from '../../../Redux/reducers/userSlice';
import {getAuthStatus} from '../../../Redux/selectors/userSelector';
import {getProfileAsideItems} from '../../../Redux/selectors/profileSelector';

const Profile = () => {
    const [isPopup, setPopupStatus] = useState(false)

    const themeStyle = useAppSelector(getThemeStyle)
    const fontSize = useAppSelector(getFontSize)
    const isAuth = useAppSelector(getAuthStatus)
    const profileAsideItems = useAppSelector(getProfileAsideItems)
    const dispatch = useDispatch()

    if (!isAuth) {
        return <Redirect to={'/login'}/>
    }

    const onLogoutClickHandler = () => {
        dispatch(logoutThunkCreator())
    }
    return (
        <section className={cn(s.profilePage, s[themeStyle ? themeStyle : ''], s[fontSize])}>
            <div className={'container'}>
                <h1 className={s.profileTitle}>Profile page</h1>
                <div className={s.profilePageInfoWrap}>
                    <div>
                        <div className={s.aside}>
                            <Aside asideItems={profileAsideItems}/>
                        </div>

                        {/*<button onClick={() => setPopupStatus(!isPopup)} className={s.logoutBtn}>*/}
                        {/*    <svg width="25px" height="25px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path*/}
                        {/*            d="M115.99219,124.00281v-76a12,12,0,0,1,24,0v76a12,12,0,0,1-24,0Zm66.564-79.82178a11.99994,11.99994,0,0,0-13.10888,20.10352,75.99962,75.99962,0,1,1-82.89454-.00049A11.99981,11.99981,0,0,0,73.44434,44.18054a100.00013,100.00013,0,1,0,109.11181.00049Z"*/}
                        {/*        />*/}
                        {/*    </svg>*/}
                        {/*    <span>Log out</span>*/}
                        {/*</button>*/}
                    </div>
                    <Switch>
                        <Route path="/profile/personal-info" render={() => <ProfileInfo/>}/>
                        <Route path="/profile/account-settings" render={() => <AccountSettings/>}/>
                        <Redirect path="/profile" to={'/profile/personal-info'}/>
                    </Switch>
                    <CSSTransition
                        in={isPopup}
                        timeout={300}
                        classNames={{
                            enter: s.optionEnter,
                            enterActive: s.optionEnterActive,
                            exitActive: s.optionExitActive
                        }}
                        unmountOnExit
                    >
                        <div className="overlay">
                            <Popup>
                                <p className={s.logoutDesc}>Вы уверены что хотите покинуть свою учётную запись</p>
                                <div className={s.logoutBtnWrap}>
                                    <button className={s.submitBtn} onClick={onLogoutClickHandler}>Logout</button>
                                    <button className={s.inverseBtn}
                                            onClick={() => setPopupStatus(!isPopup)}>Close
                                    </button>
                                </div>
                            </Popup>
                        </div>
                    </CSSTransition>
                </div>
            </div>
        </section>
    )
}

export default Profile
