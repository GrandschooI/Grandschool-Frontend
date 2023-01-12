import {AppStateType} from '../redux-store';

export const getProfileAsideItems = (state: AppStateType) => {
  return  state.userData.asideMenuItems

}