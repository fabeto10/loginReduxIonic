import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../redux/slices/login";

const store = configureStore({
    reducer: {
        auth: loginReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;