import {
    getFontSize,
    getImgAvailability,
    getLoadedInfo,
    getOptionsState,
    getStyleMode,
    getThemeStyle
} from "../styleSelector";
import store, {AppStateType} from "../../redux-toolkit-store";

let rootState: AppStateType;

beforeEach(() => {
    rootState = store.getState();
})

test('get style mode', () => {
    const styleModeData = getStyleMode(rootState)

    expect(styleModeData).toBeDefined()
    expect(styleModeData).toBe(rootState.styleMode.blindMode)
})

test('get fontSize', () => {
    const fontSizeData = getFontSize(rootState)

    expect(fontSizeData).toBeDefined()
    expect(fontSizeData).toBe(rootState.styleMode.fontSize)
})

test('get themeStyle', () => {
    const themeStyleData = getThemeStyle(rootState)

    expect(themeStyleData).toBeDefined()
    expect(themeStyleData).toBe(rootState.styleMode.themeStyle)
})

test('get img availability', () => {
    const imgAvailabilityData = getImgAvailability(rootState)

    expect(imgAvailabilityData).toBeDefined()
    expect(imgAvailabilityData).toBe(rootState.styleMode.images)
})

test('get load info', () => {
    const loadedInfoData = getLoadedInfo(rootState)

    expect(loadedInfoData).toBeDefined()
    expect(loadedInfoData).toBe(rootState.styleMode.isLoaded)
})

test('get options state', () => {
    const optionsStateData = getOptionsState(rootState)

    expect(optionsStateData).toBeDefined()
    expect(optionsStateData).toBe(rootState.styleMode.isOptionsOpen)
})