
// import {
//     forgotPasswordThunkCreator,
//     loginThunkCreator,
//     logoutThunkCreator,
//     registerThunkCreator,
//     setUserPhotoThunkCreator
// } from "../userReducer";
import {AuthAPI, AuthResponseType} from "../../../api/authAPI";
import {AxiosResponse} from "axios";
import {userAPI} from "../../../api/userAPI";
// @ts-ignore
import {styleActions} from "../styleReducer";

jest.mock("../../../api/authAPI")
jest.mock("../../../api/userAPI")

const AuthAPIMock = AuthAPI as jest.Mocked<typeof AuthAPI>
const UserAPIMock = userAPI as jest.Mocked<typeof userAPI>
const dispatchMock = jest.fn()

beforeEach(() => {
    dispatchMock.mockClear();
})
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
    AuthAPIMock.register.mockResolvedValue(result)

    // @ts-ignore
    const thunk = registerThunkCreator('test@gmail.com', '123123123', '123123123')

    await thunk(dispatchMock)
    console.log(thunk(dispatchMock))

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, styleActions.toggleIsLoadedAC(false))

    expect(dispatchMock).toHaveBeenNthCalledWith(3, styleActions.toggleIsLoadedAC(false))
})

test('Login user', async () => {
    AuthAPIMock.login.mockResolvedValue(result)

    // @ts-ignore
    const thunk = loginThunkCreator('test@gmail.com', '123123123','', 'test')

    await thunk(dispatchMock)
    expect(dispatchMock).toBeCalledTimes(2)
})

test('Logout user', async () => {
    AuthAPIMock.logout.mockResolvedValue({} as AxiosResponse)
    // @ts-ignore
    const thunk = logoutThunkCreator()

    await thunk(dispatchMock)

    expect(dispatchMock).toBeCalledTimes(2)
})

// todo test forgot password : Expected number of calls: 2 -> Received number of calls: 1

test('Forgot password', async () => {
    AuthAPIMock.forgotPassword.mockResolvedValue(result)

    // @ts-ignore
    const thunk = forgotPasswordThunkCreator('test@gmail.com')

    await thunk(dispatchMock)

    expect(dispatchMock).toBeCalledTimes(2)
})

//todo test Set User Photo : Expected number of calls: 3 -> Received number of calls: 2

test('Set User Photo', async () => {
    UserAPIMock.setProfilePhoto.mockResolvedValue({} as AxiosResponse)
    // @ts-ignore
    const thunk = setUserPhotoThunkCreator(1, 'test', null)

    await thunk(dispatchMock)

    expect(dispatchMock).toBeCalledTimes(3)
})