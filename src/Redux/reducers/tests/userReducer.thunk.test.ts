import {registerThunkCreator} from "../userReducer";
import {AuthAPI, AuthResponseType} from "../../../api/authAPI";

const AuthAPIMock = AuthAPI as jest.Mocked<typeof AuthAPI>

const result: AuthResponseType = {
    data: {
        access_token: 'test',
        user: {
            id: 1,
            name: 'test',
            email: 'test@gmail.com',
            phone: '123123123',
            gender: 'male',
            birthday: null,
            country: null,
            city: null,
            description: null,
            photo: null,
            roles: [],
            email_verified: false,
            created_at: "2023-01-15T22:35:40.000000Z",
            updated_at: "2023-01-15T22:35:40.000000Z"
        }
    },
    errors: [{ message: 'string' }]
}

AuthAPIMock.register.mockReturnValue(Promise.resolve(result))

test('Set register', async () => {
    const thunk = registerThunkCreator('test@gmail.com', '123123123', '123123123')
    const dispatchMock = jest.fn()

    await thunk(dispatchMock)

    expect(dispatchMock).toBeCalledTimes(2)
})