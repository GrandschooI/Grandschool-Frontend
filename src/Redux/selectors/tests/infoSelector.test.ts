import store, {AppStateType} from "../../redux-store";
import {getInfoAboutUs, getInfoMenu, getWebsites} from "../infoSelector";
import {InitialStateType} from "../../reducers/infoReducer";

let rootState: AppStateType;
let startInfoData: InitialStateType;

beforeEach(() => {
    rootState = store.getState();
    startInfoData = {
        aboutUs: [
            {
                itemLink: '/about-us/project',
                itemTitle: 'About project'
            },
            {
                itemLink: '/about-us/news',
                itemTitle: 'News'
            },
            {
                itemLink: '/about-us/reviews',
                itemTitle: 'Reviews'
            }
        ],
        infoPageAsideMenu: [
            {
                itemLink: '/info/websites',
                itemTitle: 'Websites',
                topics: [] as any
            }
        ],
        websites: []
    }
})

test('get websites data', () => {
    const getWebsitesData = getWebsites(rootState);

    expect(getWebsitesData).toBeDefined();
})

test('get info about us', () => {
    const getInfoAboutUsData = getInfoAboutUs(rootState);
    console.log(getInfoAboutUsData.map(el => el.itemLink));
    expect(getInfoAboutUsData).toBeDefined();
    expect(getInfoAboutUsData).toEqual(startInfoData.aboutUs);
    expect(getInfoAboutUsData.map(el => el.itemLink)).toEqual([ '/about-us/project', '/about-us/news', '/about-us/reviews' ]);
})

test('get info menu', () => {
    const getInfoMenuData = getInfoMenu(rootState);
    expect(getInfoMenuData).toBeDefined();
    expect(getInfoMenuData).toEqual(startInfoData.infoPageAsideMenu);
    expect(getInfoMenuData).toBe(startInfoData.infoPageAsideMenu);
})