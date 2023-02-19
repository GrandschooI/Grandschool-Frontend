import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import infoSlice from "./reducers/infoSlice";
import courseSlice from "./reducers/courseSlice";
import userSlice from "./reducers/userSlice";
import styleSlice from "./reducers/styleSlice";

const store = configureStore({
    reducer: {
        userData: userSlice,
        styleMode: styleSlice,
        courses: courseSlice,
        info: infoSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
});

//todo implement new appStateType
export type StoreType = ReturnType<typeof store.getState>
export default store