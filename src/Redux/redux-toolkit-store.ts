import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import infoSlice from "./reducers/infoSlice";

export const rootReducer = configureStore({
    reducer: {
        info: infoSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
});

type rootReducerType = typeof rootReducer
/*export type AppStateType = ReturnType<rootReducerType>*/

export default rootReducer