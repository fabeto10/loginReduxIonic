import loginPost, { loginAction } from "../../types/redux/login";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from "axios";
import { Storage } from '@ionic/storage';


const initialState: loginPost = {
    email: "",
    password: ""
};


const storage = new Storage();


const API_URL = "http://149.102.141.74:3000/api/v1/"

export const loginSlice = createSlice({
    name: loginAction,
    initialState: initialState,
    reducers: {
        login: async (state, action: PayloadAction<loginPost>) => {
            const response = await axios.post(API_URL + "signin", action.payload);

            if(response.status !== 200) {
                storage.set("access_token", JSON.stringify(response.data.access_token));
            };
            console.log(response.data.access_token);
        },
        // login: async (email: string, password: string) => {
        //     const response = await axios.post(API_URL + "signin", {
        //         email,
        //         password
        //     });
        //     if (response.data.access_token) {
        //         storage.set("access_token", JSON.stringify(response.data.access_token));
        //     }
        //     ;
        //     console.log(response.data.access_token);
        //     return response.data;
        // },
        logOut: () => {
            storage.remove("token");
        },
    },
});

export const { login, logOut} = loginSlice.actions;
export default loginSlice.reducer;