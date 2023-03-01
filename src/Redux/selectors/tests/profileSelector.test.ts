
import {getProfileAsideItems} from "../profileSelector";
import store, {AppStateType} from "../../redux-toolkit-store";

let rootState: AppStateType;

beforeEach(() => {
    rootState = store.getState();
})

test('get profile aside items', () => {
    const profileAsideItemsData = getProfileAsideItems(rootState);
    const rootAsideMenuItemsLink = rootState.userData.asideMenuItems.map(item => item.itemLink);
    const profileItemsLink = profileAsideItemsData.map(item => item.itemLink)

    expect(profileAsideItemsData).toBeDefined();
    expect(profileAsideItemsData.length).toBe(rootState.userData.asideMenuItems.length);
    expect(profileAsideItemsData).toEqual(rootState.userData.asideMenuItems);
    expect(profileItemsLink).toEqual(rootAsideMenuItemsLink);
})