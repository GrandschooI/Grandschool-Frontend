// @ts-ignore
import styleReducer, {styleActions, styleInitialStateType} from '../styleReducer'

let state: styleInitialStateType

beforeEach(() => {
  state = {
    blindMode: false,
    fontSize: 'small', //also has medium and large
    themeStyle: null, // has yellowTheme, whiteTheme and blueTheme
    images: true,
    isLoaded: true,
    isOptionsOpen: false
  }
})


test('Blind mode activated', () => {
  const newState = styleReducer(state, styleActions.switchBlindModeAC(true))

  expect(newState.blindMode).toBeTruthy()
  expect(newState.fontSize).toBe('small')
  expect(newState.themeStyle).toBe('yellowTheme')
  expect(newState.images).toBeTruthy()
  expect(newState.isLoaded).toBeTruthy()
  expect(newState.isOptionsOpen).toBeTruthy()
})

test('Blind mode deactivated', () => {
  const newState = styleReducer(state, styleActions.switchBlindModeAC(false))

  expect(newState.blindMode).toBeFalsy()
  expect(newState.fontSize).toBe('small')
  expect(newState.themeStyle).toBeNull()
  expect(newState.images).toBeTruthy()
  expect(newState.isLoaded).toBeTruthy()
  expect(newState.isOptionsOpen).toBeFalsy()
})

test('Set small font size', () => {
  const newState = styleReducer(state, styleActions.setFontSizeModeAC('small'))

  expect(newState.blindMode).toBeFalsy()
  expect(newState.fontSize).toBe('small')
  expect(newState.themeStyle).toBeNull()
  expect(newState.images).toBeTruthy()
  expect(newState.isLoaded).toBeTruthy()
  expect(newState.isOptionsOpen).toBeFalsy()
})

test('Set medium font size', () => {
  const newState = styleReducer(state, styleActions.setFontSizeModeAC('medium'))

  expect(newState.blindMode).toBeFalsy()
  expect(newState.fontSize).toBe('medium')
  expect(newState.themeStyle).toBeNull()
  expect(newState.images).toBeTruthy()
  expect(newState.isLoaded).toBeTruthy()
  expect(newState.isOptionsOpen).toBeFalsy()
})

test('Set large font size', () => {
  const newState = styleReducer(state, styleActions.setFontSizeModeAC('large'))

  expect(newState.blindMode).toBeFalsy()
  expect(newState.fontSize).toBe('large')
  expect(newState.themeStyle).toBeNull()
  expect(newState.images).toBeTruthy()
  expect(newState.isLoaded).toBeTruthy()
  expect(newState.isOptionsOpen).toBeFalsy()
})

test('Set yellow theme', () => {
  const newState = styleReducer(state, styleActions.setThemeStyleModeAC('yellowTheme'))

  expect(newState.blindMode).toBeFalsy()
  expect(newState.fontSize).toBe('small')
  expect(newState.themeStyle).toBe('yellowTheme')
  expect(newState.images).toBeTruthy()
  expect(newState.isLoaded).toBeTruthy()
  expect(newState.isOptionsOpen).toBeFalsy()
})

test('Set white theme', () => {
  const newState = styleReducer(state, styleActions.setThemeStyleModeAC('whiteTheme'))

  expect(newState.blindMode).toBeFalsy()
  expect(newState.fontSize).toBe('small')
  expect(newState.themeStyle).toBe('whiteTheme')
  expect(newState.images).toBeTruthy()
  expect(newState.isLoaded).toBeTruthy()
  expect(newState.isOptionsOpen).toBeFalsy()
})

test('Set blue theme', () => {
  const newState = styleReducer(state, styleActions.setThemeStyleModeAC('blueTheme'))

  expect(newState.blindMode).toBeFalsy()
  expect(newState.fontSize).toBe('small')
  expect(newState.themeStyle).toBe('blueTheme')
  expect(newState.images).toBeTruthy()
  expect(newState.isLoaded).toBeTruthy()
  expect(newState.isOptionsOpen).toBeFalsy()
})

test('Set images', () => {
  const newState = styleReducer(state, styleActions.setImgAvailabilityAC(true))

  expect(newState.blindMode).toBeFalsy()
  expect(newState.fontSize).toBe('small')
  expect(newState.themeStyle).toBeNull()
  expect(newState.images).toBeTruthy()
  expect(newState.isLoaded).toBeTruthy()
  expect(newState.isOptionsOpen).toBeFalsy()
})

test('Remove images', () => {
  const newState = styleReducer(state, styleActions.setImgAvailabilityAC(false))

  expect(newState.blindMode).toBeFalsy()
  expect(newState.fontSize).toBe('small')
  expect(newState.themeStyle).toBeNull()
  expect(newState.images).toBeFalsy()
  expect(newState.isLoaded).toBeTruthy()
  expect(newState.isOptionsOpen).toBeFalsy()
})

test('Show blind options mode', () => {
  const newState = styleReducer(state, styleActions.setOptionsModeAC(true))

  expect(newState.blindMode).toBeFalsy()
  expect(newState.fontSize).toBe('small')
  expect(newState.themeStyle).toBeNull()
  expect(newState.images).toBeTruthy()
  expect(newState.isLoaded).toBeTruthy()
  expect(newState.isOptionsOpen).toBeTruthy()
})

test('Remove blind options mode', () => {
  const newState = styleReducer(state, styleActions.setOptionsModeAC(false))

  expect(newState.blindMode).toBeFalsy()
  expect(newState.fontSize).toBe('small')
  expect(newState.themeStyle).toBeNull()
  expect(newState.images).toBeTruthy()
  expect(newState.isLoaded).toBeTruthy()
  expect(newState.isOptionsOpen).toBeFalsy()
})

test('Set isLoaded status', () => {
  const newState = styleReducer(state, styleActions.toggleIsLoadedAC(true))

  expect(newState.blindMode).toBeFalsy()
  expect(newState.fontSize).toBe('small')
  expect(newState.themeStyle).toBeNull()
  expect(newState.images).toBeTruthy()
  expect(newState.isLoaded).toBeTruthy()
  expect(newState.isOptionsOpen).toBeFalsy()
})

test('Remove isLoaded status', () => {
  const newState = styleReducer(state, styleActions.toggleIsLoadedAC(false))

  expect(newState.blindMode).toBeFalsy()
  expect(newState.fontSize).toBe('small')
  expect(newState.themeStyle).toBeNull()
  expect(newState.images).toBeTruthy()
  expect(newState.isLoaded).toBeFalsy()
  expect(newState.isOptionsOpen).toBeFalsy()
})
