// @ts-ignore
import userReducer, { setPhoto, setAuth, setProfileInfo, initialStateType } from '../userSlice'

let state: initialStateType

beforeEach(() => {
  state = {
    currentUser: {
      birthday: null,
      city: null,
      country: null,
      created_at: null,
      description: null,
      email: null,
      email_verified: false,
      gender: null,
      id: null,
      name: null,
      phone: null,
      photo: null,
      roles: [],
      updated_at: null,
    },
    asideMenuItems: [
      { itemTitle: 'Personal information', itemLink: '/profile/personal-info' },
      { itemTitle: 'Personal achievements', itemLink: '/profile/personal-achievements' },
      { itemTitle: 'Account Settings', itemLink: '/profile/account-settings' },
    ],
    isAuth: false,
  }
})

// test('Set auth', () => {
//     const newState = userReducer(state, setAuth({
//         id: 5,
//         name: "test",
//         email: "test-email@gmail.com",
//         phone: null,
//         gender: null,
//         birthday: null,
//         country: null,
//         city: null,
//         description: null,
//         photo: null,
//         roles: [],
//         verified: true,
//         created_at: "2022-12-06T21:45:12.000000Z",
//         updated_at: "2022-12-06T21:45:12.000000Z",
//     }, true))
//
//     expect(newState.currentUser.id).toBe(5)
//     expect(newState.currentUser.email).toBe('test-email@gmail.com')
//     expect(newState.isAuth).toBeTruthy()
// })

// test('Set Profile Info', () => {
//     const newState = userReducer(state, setProfileInfo(
//         "Eugene Kuhot",
//         'male',
//         new Date('2019-05-14T11:01:58.135Z'),
//          'Poland',
//          'Cracow',
//          'testText'
//     ))

//     expect(newState.currentUser.name).toBe('Eugene Kuhot')
//     expect(newState.currentUser.gender).toBe('male')
//     expect(newState.currentUser.birthday).toEqual(new Date('2019-05-14T11:01:58.135Z'))
//     expect(newState.currentUser.country).toBe('Poland')
//     expect(newState.currentUser.city).toBe('Cracow')
//     expect(newState.currentUser.description).toBe('testText')
// })

test('Set user photo', () => {
  const newState = userReducer(state, setPhoto('/photoUrl'))

  expect(newState.currentUser.photo).toBe('/photoUrl')
})
