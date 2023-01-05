import userReducer, {userActions, initialStateType} from '../userReducer'

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
            updated_at: null
        },
        asideMenuItems: [
            {itemTitle: 'Personal information', itemLink: '/profile/personal-info'},
            {itemTitle: 'Personal achievements', itemLink: '/profile/personal-achievements'},
            {itemTitle: 'Account Settings', itemLink: '/profile/account-settings'}
        ],
        isAuth: false
    }
})


test('Set auth', () => {
    const newState = userReducer(state, userActions.setAuth({
        id: 5,
        name: "test",
        email: "test-email@gmail.com",
        phone: null,
        gender: null,
        birthday: null,
        country: null,
        city: null,
        description: null,
        photo: null,
        roles: [],
        verified: true,
        created_at: "2022-12-06T21:45:12.000000Z",
        updated_at: "2022-12-06T21:45:12.000000Z",
    }, true))

    expect(newState.currentUser.id).toBe(5)
    expect(newState.currentUser.email).toBe('test-email@gmail.com')
    expect(newState.isAuth).toBeTruthy()
})