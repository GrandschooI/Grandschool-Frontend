import {
    getAboutUserText,
    getAuthStatus, getUserAsideItems,
    getUserBirthData,
    getUserCity,
    getUserCountry,
    getUserName, getUserPhotoLink,
    getUserSex
} from "../userSelector";
import store, {AppStateType} from "../../redux-toolkit-store";

let rootState: AppStateType;

beforeEach(() => {
    rootState = store.getState();
})

test('get auth status', () => {
    const authStatusData = getAuthStatus(rootState)

    expect(authStatusData).toBeDefined()
    expect(authStatusData).toBe(rootState.userData.isAuth)
})

test('get user name', () => {
    const userNameData = getUserName(rootState)

    expect(userNameData).toBeDefined()
    expect(userNameData).toBe(rootState.userData.currentUser.name)
})

test('get user sex', () => {
    const userSexData = getUserSex(rootState)

    expect(userSexData).toBeDefined()
    expect(userSexData).toBe(rootState.userData.currentUser.gender)
})

test('get user birth data', () => {
    const userBirthData = getUserBirthData(rootState)

    expect(userBirthData).toBeDefined()
    expect(userBirthData).toBe(rootState.userData.currentUser.gender)
})

test('get user country', () => {
    const userCountryData = getUserCountry(rootState)

    expect(userCountryData).toBeDefined()
    expect(userCountryData).toBe(rootState.userData.currentUser.country)
})

test('get user city', () => {
    const userCityData = getUserCity(rootState)

    expect(userCityData).toBeDefined()
    expect(userCityData).toBe(rootState.userData.currentUser.city)
})

test('get about user text', () => {
    const aboutUserTextData = getAboutUserText(rootState)

    expect(aboutUserTextData).toBeDefined()
    expect(aboutUserTextData).toBe(rootState.userData.currentUser.description)
})

test('get user photo link', () => {
    const userPhotoLinkData = getUserPhotoLink(rootState)

    expect(userPhotoLinkData).toBeDefined()
    expect(userPhotoLinkData).toBe(rootState.userData.currentUser.photo)
})

test('get user aside items', () => {
    const userAsideItemsData = getUserAsideItems(rootState)
    const userAsideItemsDataItemLink = userAsideItemsData.map(item => item.itemLink)
    const rootUserAsideItemsDataItemLink = rootState.userData.asideMenuItems.map(item => item.itemLink)

    expect(userAsideItemsData).toBeDefined()
    expect(userAsideItemsData).toEqual(rootState.userData.asideMenuItems)
    expect(userAsideItemsDataItemLink).toEqual(rootUserAsideItemsDataItemLink)
})