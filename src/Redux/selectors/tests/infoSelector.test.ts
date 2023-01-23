import store, {AppStateType} from "../../redux-store";
import {getInfoAboutUs, getInfoMenu, getWebsites} from "../infoSelector";

let rootState: AppStateType;

beforeEach(() => {
    rootState = store.getState();
})

test('get websites data', () => {
    const getWebsitesData = getWebsites(rootState);

    expect(getWebsitesData).toBeDefined();
})

test('get info about us', () => {
    const getInfoAboutUsData = getInfoAboutUs(rootState);
    const infoAboutUsDataItemLink = rootState.info.aboutUs.map(el => el.itemLink)

    expect(getInfoAboutUsData).toBeDefined();
    expect(getInfoAboutUsData).toEqual(rootState.info.aboutUs);
    expect(getInfoAboutUsData.map(el => el.itemLink)).toEqual(infoAboutUsDataItemLink);
})

test('get info menu', () => {
    const getInfoMenuData = getInfoMenu(rootState);
    console.log(getInfoMenuData)
    expect(getInfoMenuData).toBeDefined();
    expect(getInfoMenuData).toEqual(rootState.info.infoPageAsideMenu);
})