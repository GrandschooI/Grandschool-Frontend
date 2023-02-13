import {Nullable} from "../redux-store";
import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    currentUser: {
        birthday: null as Nullable<Date>,
            city: null as Nullable<string>,
            country: null as Nullable<string>,
            created_at: null as Nullable<string>,
            description: null as Nullable<string>,
            email: null as Nullable<string>,
            email_verified: false,
            gender: null as Nullable<string>,
            id: null as Nullable<number>,
            name: null as Nullable<string>,
            phone: null as Nullable<string>,
            photo: null as Nullable<string>,
            roles: [],
            updated_at: null as Nullable<string>
    },
    asideMenuItems: [
        {itemTitle: 'Personal information', itemLink: '/profile/personal-info'},
        {itemTitle: 'Personal achievements', itemLink: '/profile/personal-achievements'},
        {itemTitle: 'Account Settings', itemLink: '/profile/account-settings'}
    ],
        isAuth: false
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setAuth (state: any, action: any) {
            state.authData = action.authData
            state.isAuth = action.isAuth
        },
        setProfileInfo (state: any, action: any) {
           state.currentUser = {
               name: action.data.name,
               gender: action.data.gender,
               birthday: action.data.birthDate,
               country: action.data.country,
               city: action.data.city,
               description: action.data.aboutUserText
           }
        },
        setPhoto (state: any, action: any) {
            state.currentUser.photo = action.data
        }
    }
})

export default userSlice.reducer
export const { setAuth, setProfileInfo, setPhoto } = userSlice.actions;