import styleReducer, {styleActions, styleInitialStateType} from '../styleReducer'

let state: styleInitialStateType

beforeEach(() => {
  state = {
    blindMode: false,
    fontSize: 'small', //also has medium and large
    themeStyle: null, // has yellowTheme, whiteTheme and blueTheme
    images: true,
    isLoaded: false,
    isOptionsOpen: false
  }
})


test('Blind mode activated', () => {
  const newState = styleReducer(state, styleActions.switchBlindModeAC(true))

  expect(newState.blindMode).toBeTruthy()
  expect(newState.themeStyle).toBe('yellowTheme')
  expect(newState.isOptionsOpen).toBeTruthy()
})

test('Blind mode deactivated', () => {
  const newState = styleReducer(state, styleActions.switchBlindModeAC(false))

  expect(newState.blindMode).toBeFalsy()
  expect(newState.themeStyle).toBeNull()
  expect(newState.images).toBeTruthy()
  expect(newState.fontSize).toBe('small')
  expect(newState.isOptionsOpen).toBeFalsy()
})

test('Set small font size', () => {
  const newState = styleReducer(state, styleActions.setFontSizeModeAC('small'))

  expect(newState.fontSize).toBe('small')
})

test('Set medium font size', () => {
  const newState = styleReducer(state, styleActions.setFontSizeModeAC('medium'))

  expect(newState.fontSize).toBe('medium')
})

test('Set large font size', () => {
  const newState = styleReducer(state, styleActions.setFontSizeModeAC('large'))

  expect(newState.fontSize).toBe('large')
})

test('Set yellow theme', () => {
  const newState = styleReducer(state, styleActions.setThemeStyleModeAC('yellowTheme'))

  expect(newState.themeStyle).toBe('yellowTheme')
})

test('Set white theme', () => {
  const newState = styleReducer(state, styleActions.setThemeStyleModeAC('whiteTheme'))

  expect(newState.themeStyle).toBe('whiteTheme')
})

test('Set blue theme', () => {
  const newState = styleReducer(state, styleActions.setThemeStyleModeAC('blueTheme'))

  expect(newState.themeStyle).toBe('blueTheme')
})

test('Set images', () => {
  const newState = styleReducer(state, styleActions.setImgAvailabilityAC(true))

  expect(newState.images).toBeTruthy()
})

test('Remove images', () => {
  const newState = styleReducer(state, styleActions.setImgAvailabilityAC(false))

  expect(newState.images).toBeFalsy()
})

test('Show blind options mode', () => {
  const newState = styleReducer(state, styleActions.setOptionsModeAC(true))

  expect(newState.isOptionsOpen).toBeTruthy()
})

test('Remove blind options mode', () => {
  const newState = styleReducer(state, styleActions.setOptionsModeAC(false))

  expect(newState.isOptionsOpen).toBeFalsy()
})
