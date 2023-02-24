import {AppStateType} from "../redux-toolkit-store";


export const getProfileAsideItems = (state: AppStateType) => {
  return  state.userData.asideMenuItems

}