import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import infoSlice from "./reducers/infoSlice";
import courseSlice from "./reducers/courseSlice";
import userSlice from "./reducers/userSlice";
import styleSlice from "./reducers/styleSlice";

export const rootReducer = configureStore({
    reducer: {
        userData: userSlice,
        styleMode: styleSlice,
        courses: courseSlice,
        info: infoSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
});

type rootReducerType = typeof rootReducer
/*export type AppStateType = ReturnType<rootReducerType>*/

export default rootReducer